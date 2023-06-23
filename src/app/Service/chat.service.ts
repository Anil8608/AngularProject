import { Injectable } from '@angular/core';
import { ChatDetailsModel } from '../Model/ChatDetailsModel';
import { RestclientService } from './restclient.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  configApiBase: string = 'http://localhost:3000';

  constructor(private restclient: RestclientService) {

  }


  getChatList() {
    let url = this.configApiBase + '/ChatThread';
    return this.restclient.getRequest(url);
  }

  AddChatUser(userDetail: any) {
    let url = this.configApiBase + '/ChatThread';
    return this.restclient.postRequest(url, userDetail);
  }
}
