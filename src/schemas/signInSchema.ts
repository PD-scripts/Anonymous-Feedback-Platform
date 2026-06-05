import { z } from 'zod'

export const signInSchema = z.object({
  identifier: z.string(),// mail or username can be used
  password: z.string(),
});

