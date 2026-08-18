import mongoose, { Schema, Document } from 'mongoose';

export interface Message extends Document {//type script interface for message
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
//customise scema hai is liye hume type of scema define krna pada hai
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  
});
//this is user interface
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date; 
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

// User schema
const UserSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],//this is regex for basic email validation , found from gpt
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  verifyCode: {
    type: String,
    required: [true, 'Verify Code is required'],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});
//next me hume pehle se nhi pata chalta ki pehli bar run ho rha ya pehle bhi run ho chuka hai , mongoose.models.User se hume pata chal jata hai ki pehle se hi User model exist karta hai ya nahi , agar exist karta hai to usko use karenge warna naya model create karenge , isse hume error nahi aayega jab hum baar baar code run karenge development ke dauran
//const UserModel =(expecting pehle se hai) || (if not present before, create first) ;

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);//model ka data type User hai aur uska naam 'User' hai aur uska schema UserSchema hai, type script me batana padta hai hr baar ki kya type hai

export default UserModel;
