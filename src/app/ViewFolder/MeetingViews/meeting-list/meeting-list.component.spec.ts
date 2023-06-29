import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListComponent } from './meeting-list.component';
import { UpComingMeetingComponent } from '../../HomeView/up-coming-meeting/up-coming-meeting.component';
import { MeetingDetailComponent } from '../meeting-detail/meeting-detail.component';
import { CreateMeetingComponent } from '../../HomeView/create-meeting/create-meeting.component';
import { FormsModule } from '@angular/forms';
import { Serializer } from '@angular/compiler';
import { ServiceMessageService } from 'src/app/service-message.service';

describe('MeetingListComponent', () => {
  let component: MeetingListComponent;
  let fixture: ComponentFixture<MeetingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingListComponent,UpComingMeetingComponent,MeetingDetailComponent,CreateMeetingComponent],
      imports: [FormsModule], 
    });
    fixture = TestBed.createComponent(MeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('createMeet',()=>{

  let component: MeetingListComponent;
  let service: ServiceMessageService;
  let spy: any;
  const meetingDetail =
  {
    jioMeetId: 1,
    meetTitle: "test1",
    host: "test1",
    isPast: true,
    description: "test1"
  }

  beforeEach(() => {
    service = new ServiceMessageService();
    component = new MeetingListComponent(service);
  });

  describe('Method: CreateMeet', () => {

    it('should call the `createMeet` method on the `ServiceMessageService`', () => {
      spy = spyOn(service, 'createMeet');
      component.createMeet(meetingDetail);
      expect(spy).toHaveBeenCalled();
    });
  });

});
