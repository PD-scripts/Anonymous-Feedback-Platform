//CODE FOR THE LOGIC OF SIGN UP API



// IF existingUserByEmail EXISTS THEN
//     IF existingUserByEmail.isVerified THEN
//         success: false,
//     ELSE
//         // Save the updated user
//     END IF
// ELSE
//     // Create a new user with the provided details
//     // Save the new user
// END IF


import dbConnect from '@/lib/dbConnect';//db conection hr route me chalta hai because next edge me chalta hai
import UserModel from '@/model/User';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';

export async function POST(request: Request) {
  await dbConnect();//jab kisi ne req ki tab database se connect hoga , isse hume baar baar database se connect hone me time waste nahi karna padega , aur agar already connection hai to wo use karega , isse performance bhi improve hogi

  try {
    //jo frontedn hai uske ui me 3 fields hai username , email and password , to unko hum yaha se access karenge , request.json() se hume body me jo data aaya hai wo mil jayega , aur usme se hum username , email and password ko destructure kar lenge
    const { username, email, password } = await request.json();
   /// kya koi ayesa user hai jo already verify ho chuka hai aur uska username same hai , agar aisa user milta hai to hume usko error dena hai ki username already taken hai , kyunki hum chahte hai ki har user ka unique username ho
    const existingVerifiedUserByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUserByUsername) {
      return Response.json(
        {
          success: false,//user mil gaya hai to ab registration nhi ho sakta , chnage ur user name
          message: 'Username is already taken',
        },
        { status: 400 }
      );
    }
 
    const existingUserByEmail = await UserModel.findOne({ email });
    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: 'User already exists with this email',
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserByEmail.password = hashedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await existingUserByEmail.save();
      }
    } else {//user by email nhi mila mtlb user pehli baar aya hai to hume usko create karna padega
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);


      //saving user in db
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessages: true,
        messages: [],
      });

      await newUser.save();
    }

    // Send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'User registered successfully. Please verify your account.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
      },
      { status: 500 }
    );
  }
}
