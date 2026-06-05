import { Message } from "@/model/User";//kuch api response honge jaha sirf message aye honge 

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;//? means optional
  messages?: Array<Message>//message are also optional
};
