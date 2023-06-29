import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailComponent } from './chat-detail.component';
import { ChatService } from 'src/app/Service/chat.service';
import { RestclientService } from 'src/app/Service/restclient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChatDetailComponent', () => {
  let component: ChatDetailComponent;
  let fixture: ComponentFixture<ChatDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ChatDetailComponent],
      providers: [ChatService,RestclientService]
    });
    fixture = TestBed.createComponent(ChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
