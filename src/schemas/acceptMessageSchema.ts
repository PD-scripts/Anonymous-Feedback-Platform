import { z } from 'zod'
//zod hum use krte hai because hume direct validation nhi krna hai
export const AcceptMessageSchema = z.object({
  acceptMessages: z.boolean(),
});