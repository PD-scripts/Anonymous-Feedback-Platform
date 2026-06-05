import { z } from 'zod'
//zod hum use krte hai because hume direct validation nhi krna hai
//message accept kr rha hai ya nhi ie true or false , isliye boolean use kiya hai
export const AcceptMessageSchema = z.object({
  acceptMessages: z.boolean(),
});