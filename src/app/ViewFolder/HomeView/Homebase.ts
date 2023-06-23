import { MeetModel } from "src/app/Model/MeetingModel";

export class Homebase {

    meetingModel: MeetModel[];
    localItemCollection;

    constructor() {
        this.localItemCollection = localStorage.getItem("meetingList");
        console.log(this.localItemCollection);
        if (this.localItemCollection == null) {
            this.meetingModel = [];
        }
        else {
            this.meetingModel = JSON.parse(this.localItemCollection);
        }
    }

    meetDelete(meet: MeetModel) {
        console.log(meet);
        const index = this.meetingModel.indexOf(meet);
        this.meetingModel.splice(index, 1);
        localStorage.setItem("meetingList", JSON.stringify(this.meetingModel));
      }
    
      createMeet(meet: MeetModel) {
        console.log(meet);
        this.meetingModel.push(meet);
        localStorage.setItem("meetingList", JSON.stringify(this.meetingModel));
        
      }




}