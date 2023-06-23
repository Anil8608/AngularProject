import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { MeetModel } from 'src/app/Model/MeetingModel';
import { ServiceMessageService } from 'src/app/service-message.service';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})

export class MeetingDetailComponent {

  //@Input() selectedMeeting : MeetModel|null;
  @Output() hideMeetingDetail: EventEmitter<MeetModel> = new EventEmitter();
  isDivVisible:boolean=true;
  meetingTitle:string;
  meetingDescription:string;
  isHost:boolean;
  mySubscription: Subscription;
  hostName : string;

constructor(private _serviceMessage : ServiceMessageService)
{
  this.mySubscription= interval(1000).subscribe((x =>{
    this.UpdateMeetingDetails();
}));
}

UpdateMeetingDetails() {
  if (this._serviceMessage.selectedMeet) {
    this.meetingTitle = this._serviceMessage.selectedMeet.meetTitle;
    this.meetingDescription = this._serviceMessage.selectedMeet.description;
    this.hostName = this._serviceMessage.selectedMeet.host;
  }
  else
  {
    this.hideMeetingDetail.emit();
  }
}
 


}
