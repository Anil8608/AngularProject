import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingMeetingComponent } from './up-coming-meeting.component';

describe('UpComingMeetingComponent', () => {
  let component: UpComingMeetingComponent;
  let fixture: ComponentFixture<UpComingMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpComingMeetingComponent]
    });
    fixture = TestBed.createComponent(UpComingMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
