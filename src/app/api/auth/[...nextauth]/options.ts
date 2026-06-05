import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import User from '@/model/User';

export const authOptions: NextAuthOptions = {
  //providers-> how user login
  providers: [
    //Allow login using username/email + password
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      //when user login karega to authorize function call hoga , aur usme credentials pass honge , aur hume ye check karna hai ki kya credentials sahi hai ya nahi , agar sahi hai to user return karna hai , aur agar sahi nahi hai to error throw karna hai
// User Login
//      ↓
// authorize()
//      ↓
// DB Check
//      ↓
// Password Check
//      ↓
// Return User


      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error('No user found with this email');
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error('Incorrect password');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],

// What Happens After Return User?

// Suppose:

// return user;

// Now NextAuth says:

// Okay this user is authenticated.
// Let's create a JWT.

// This triggers:

// callbacks.jwt()


  callbacks: {
    async jwt({ token, user }) {


// Token initially:

// {
//   name: null,
//   email: null
// }

      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string to store in mongodb
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.username = user.username;//store username 
      }
      return token;
    },


// Final token:

// {
//  _id: "123",
//  username: "priyanshu",
//  isVerified: true,
//  isAcceptingMessages: true
// }

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },


// Normally NextAuth provides:

// /default login page

// You override it:

// /sign-in

// Now when authentication required:

// Redirect → /sign-in
  
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
};
