import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './ViewFolder/HomeView/home-component/home-component.component';
import { UpComingMeetingComponent } from './ViewFolder/HomeView/up-coming-meeting/up-coming-meeting.component';
import { CreateMeetingComponent } from './ViewFolder/HomeView/create-meeting/create-meeting.component';
import { RecentViewComponent } from './ViewFolder/ChatViews/recent-view/recent-view.component';
import { MeetingListComponent } from './ViewFolder/MeetingViews/meeting-list/meeting-list.component';
import { ContactDirComponent } from './ViewFolder/ContactViews/contact-dir/contact-dir.component';
import { DashBoardComponent } from './ViewFolder/HomeView/dash-board/dash-board.component';
import { FormsModule } from '@angular/forms';
import { MeetingDetailComponent } from './ViewFolder/MeetingViews/meeting-detail/meeting-detail.component';
import { ServiceMessageService } from './service-message.service';
import { ChatDetailComponent } from './ViewFolder/ChatViews/chat-detail/chat-detail.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogginInterceptorInterceptor } from './Service/loggin-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UpComingMeetingComponent,
    CreateMeetingComponent,
    RecentViewComponent,
    MeetingListComponent,
    ContactDirComponent,
    DashBoardComponent,
    MeetingDetailComponent,
    ChatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule
  ],
  providers: [ServiceMessageService,
  {provide:HTTP_INTERCEPTORS,useClass:LogginInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
