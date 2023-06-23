import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Homebase } from '../Homebase';
import { MeetModel } from 'src/app/Model/MeetingModel';
import { ServiceMessageService } from 'src/app/service-message.service';

@Component({
  selector: 'app-up-coming-meeting',
  templateUrl: './up-coming-meeting.component.html',
  styleUrls: ['./up-coming-meeting.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default
})
export class UpComingMeetingComponent {
 
  meetingList : MeetModel[];
  @Output() meetingSelected: EventEmitter<MeetModel> = new EventEmitter();


  constructor(private _serviceMessage : ServiceMessageService)
  {
   
  }

  ngOnInit()
  {
    this.refreshMeeting();
  }

  meetDelete(meet: MeetModel) {
    this._serviceMessage.meetDelete(meet);
  }

  refreshMeeting()
  {
    this._serviceMessage.getMeetingList();
    this.meetingList = this._serviceMessage.meetingList;
  }

  selectedMeet(meet:MeetModel)
  {
     this.meetingSelected.emit(meet);
  }

}
