import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentComponent } from './home-component.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { MeetingListComponent } from '../../MeetingViews/meeting-list/meeting-list.component';
import { UpComingMeetingComponent } from '../up-coming-meeting/up-coming-meeting.component';

describe('HomeComponentComponent', () => {
  let component: HomeComponentComponent;
  let fixture: ComponentFixture<HomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponentComponent,DashBoardComponent,MeetingListComponent,UpComingMeetingComponent]
    });
    fixture = TestBed.createComponent(HomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
