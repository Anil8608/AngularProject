import { ChatDetailsModel } from "src/app/Model/ChatDetailsModel";
import { ChatService } from "src/app/Service/chat.service";

export class ChatBaseComponent {

  chatMessage: string;
  constructor(_chatService: ChatService) {

  }

  //non return type method
  refreshMessage(chatdetail: any) {
    console.log(chatdetail);
    if (chatdetail != null)
      this.chatMessage = chatdetail.Message;

  }

}