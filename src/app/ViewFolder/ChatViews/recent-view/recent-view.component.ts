import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ChatDetailsModel } from 'src/app/Model/ChatDetailsModel';
import { ChatService } from 'src/app/Service/chat.service';
import { ChatDetailComponent } from '../chat-detail/chat-detail.component';
import { Subscription, interval } from 'rxjs';

@Component({
   selector: 'app-recent-view',
   templateUrl: './recent-view.component.html',
   styleUrls: ['./recent-view.component.css'],
   providers: [ChatService]
})

export class RecentViewComponent {

   //chatCollectionDetail: ChatDetailsModel[];
   @ViewChild('childChatDetailComponent') chatDetailChildComponent: ChatDetailComponent;
   @ViewChild('closeCreateChatModal') closeMeetingModal: ElementRef;
   chatCollection: any
   ChatName : string;
   Message : string;
   isChatDetailVisible: boolean;


   constructor(@Inject('IChatService') private iChatService:ChatService) {
      this.LoadChatCollection();
      this.isChatDetailVisible = false;
   }

   
   selectedChat(chatThread: any) {
      this.isChatDetailVisible = !!chatThread;
      this.chatDetailChildComponent.refreshMessage(chatThread);
   }
   
   //Get request : Get data from API
   LoadChatCollection()
   {
      this.iChatService.getChatList().subscribe((data) => {
            console.warn("data", data);
            this.chatCollection = data;
         })
   }

   //POST request : Add data in API
   AddNewChatThraed() {
      const newUser =
      {
        name: this.ChatName,
        Message: this.Message
  
      }
  
      this.iChatService.AddChatUser(newUser).subscribe((reponce) => {
        console.warn("Responce", reponce);
      });
  
      this.closeMeetingModal.nativeElement.click();
      this.LoadChatCollection();
    }
}
