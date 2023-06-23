import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MeetModel } from 'src/app/Model/MeetingModel';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {

  @Output() addMeeting: EventEmitter<MeetModel> = new EventEmitter();
  @ViewChild('closeMeetingModal') closeMeetingModal: ElementRef;

  title: string;
  description: string;
  Createdby : string;

  OnSubmit() {
    if (this.title == null) {
      alert("Fill Title");
      return;
    }
    
    var randNumber = Math.random() * 1000;
    const meetingDetail =
    {
      jioMeetId: randNumber,
      meetTitle: this.title,
      host: this.Createdby,
      isPast: true,
      description: this.description
    }

    this.addMeeting.emit(meetingDetail);

    //Closing Model After submit
    this.closeMeetingModal.nativeElement.click();
  }

}
