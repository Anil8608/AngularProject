import { Component, ElementRef, Inject, Input, NgModule, ViewChild } from '@angular/core';
import { ChatDetailsModel } from 'src/app/Model/ChatDetailsModel';
import { IChatService } from 'src/app/Model/Ichatservice';
import { ChatBaseComponent } from '../ChatBaseComponent';
import {ChatService} from 'src/app/Service/chat.service'


@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})




export class ChatDetailComponent extends ChatBaseComponent{

  

  constructor() {
    super();
  }

  

  

}
