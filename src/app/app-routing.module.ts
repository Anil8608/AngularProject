import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './ViewFolder/HomeView/home-component/home-component.component';
import { RecentViewComponent } from './ViewFolder/ChatViews/recent-view/recent-view.component';
import { MeetingListComponent } from './ViewFolder/MeetingViews/meeting-list/meeting-list.component';
import { ContactDirComponent } from './ViewFolder/ContactViews/contact-dir/contact-dir.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'chat',
    component: RecentViewComponent
  },
  {
    path: 'meeting',
    component: MeetingListComponent
  },
  {
    path: 'contact',
    component: ContactDirComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
