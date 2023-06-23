import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChatDetailsModel } from 'src/app/Model/ChatDetailsModel';
import { ChatService } from 'src/app/Service/chat.service';
import { ChatBaseComponent } from '../ChatBaseComponent';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent extends ChatBaseComponent {

  

  constructor(private _chatServi: ChatService) {

    super(_chatServi);
  }

  

}
