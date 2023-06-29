import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetingComponent } from './create-meeting.component';
import { FormsModule } from '@angular/forms';

describe('CreateMeetingComponent', () => {
  let component: CreateMeetingComponent;
  let fixture: ComponentFixture<CreateMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMeetingComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(CreateMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
