import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentViewComponent } from './recent-view.component';
import { ChatService } from 'src/app/Service/chat.service';
import { RestclientService } from 'src/app/Service/restclient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChatDetailComponent } from '../chat-detail/chat-detail.component';
import { FormsModule } from '@angular/forms';

describe('RecentViewComponent', () => {
  let component: RecentViewComponent;
  let fixture: ComponentFixture<RecentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentViewComponent,ChatDetailComponent],
      imports: [HttpClientTestingModule,FormsModule], 
      providers: [ChatService,RestclientService]
    });
    fixture = TestBed.createComponent(RecentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
