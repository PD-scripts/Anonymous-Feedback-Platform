import { z } from 'zod';
//email me 6 digit ka hi code ana chaiye

//isko direct bhi kr sakte the without object
export const verifySchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 digits'),
});
