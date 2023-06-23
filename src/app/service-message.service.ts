import { Injectable } from '@angular/core';
import { MeetModel } from './Model/MeetingModel';

@Injectable({
  providedIn: 'root'
})

export class ServiceMessageService {

   meetingList : MeetModel[];
   selectedMeet : MeetModel | null;
   localItemCollection:any;

  constructor() { }
 
  getMeetingList()
  {
    this.localItemCollection = localStorage.getItem("meetingList");
        console.log(this.localItemCollection);
        if (this.localItemCollection == null) {
            this.meetingList = [];
        }
        else {
            this.meetingList = JSON.parse(this.localItemCollection);
        }
  }

  meetDelete(meet: MeetModel) {
    const index = this.meetingList.indexOf(meet);
    this.meetingList.splice(index, 1);
    localStorage.setItem("meetingList", JSON.stringify(this.meetingList));
    if (this.selectedMeet && this.selectedMeet.jioMeetId == meet.jioMeetId) {
      this.selectedMeet = null;
    }
    
  }

  createMeet(meet: MeetModel) {
    this.meetingList.push(meet);
    localStorage.setItem("meetingList", JSON.stringify(this.meetingList));
    
  }

setSelectedMeet(meet:MeetModel)
{
this.selectedMeet = meet;
}

}
