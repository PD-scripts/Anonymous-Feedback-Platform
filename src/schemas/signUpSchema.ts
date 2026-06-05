import { z } from 'zod';
//sign up ka schema and validation rules for username, email and password

//jab user signup karega to sabse pehle validation hoga , or hum isko export bhi kr denge kyonki or files me use kr sake 
export const usernameValidation = z
  .string()
  .min(2, 'Username must be at least 2 characters')
  .max(20, 'Username must be no more than 20 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');// 0-9 a to z  A to Z  ke alawa kuc hn hi hona chaiye




  
  //yaha per object banaay because hume 3-4le entitiy check krni hai ...upar vale me z.string kiya because single entity thi
export const signUpSchema = z.object({
  username: usernameValidation,

  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

//ye zod ka use kiya hai , kuch bhi access kiya hai , by using z
