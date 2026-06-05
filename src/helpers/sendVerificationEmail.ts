import { resend } from "@/lib/resend";//for api key 
import VerificationEmail from "../../emails/VerificationEmail";//emial ki template ko import kiya hai , kyunki hume email bhejna hai to template ki jarurat padegi
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Mystery Message Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),//template se ui milega
    });
    return { success: true, message: 'Verification email sent successfully.' };//due to promise we have to return something , and we are returning object of type ApiResponse
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };//primse ki vajah se return kiya , promise always wants something
  }
}
