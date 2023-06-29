import { Component } from '@angular/core';
import { Homebase } from '../../HomeView/Homebase';
import { ServiceMessageService } from 'src/app/service-message.service';
import { MeetModel } from 'src/app/Model/MeetingModel';
import { MeetingDetailComponent } from '../meeting-detail/meeting-detail.component';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent {

  selectedMeetItem: MeetModel | null = null;
  isMeetingDetailVisible: boolean;

  constructor(private _serviceMessage: ServiceMessageService) {
    if (this.selectedMeetItem == null) {
      this.hideMeetingDetails();
    }
  }

  hideMeetingDetails(): void {
    this.isMeetingDetailVisible = false;
  }

  createMeet(meet: MeetModel) {
    if (meet == null || meet.meetTitle == "") {
      return;
    }
    this._serviceMessage.createMeet(meet);
  }

  seletedMeeting(meet: MeetModel) {
    this.selectedMeetItem = meet;
    this.isMeetingDetailVisible = true;
    this._serviceMessage.setSelectedMeet(meet);
  }

  hideMeetingDetail() {
    this.isMeetingDetailVisible = false;
  }

}
