import { Resend } from 'resend';
//for api key we have to use env variable because we dont want to hardcode it in our code , and env variable is a good practice for storing sensitive information like api keys
export const resend = new Resend(process.env.RESEND_API_KEY);
