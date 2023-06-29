import { Component } from '@angular/core';
import { Homebase } from '../Homebase';
import { SqrtPipe } from 'src/app/Shared/Pipes/SqrtPipe';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  providers: [SqrtPipe],
})
export class DashBoardComponent {




  isDivVisible: boolean = true;
  title: string;
  valueRecd: number;
  label: string;

  constructor(private Sqrt: SqrtPipe,) {
    this.title = "dashborad";
    this.valueRecd = this.Sqrt.transform(49);
  }

  GetValue() {
    //console.log(this.label);
    debugger
    this.title = `${this.label} Welcome you`;
  }

  myTitlekeyup(arg0: string) {
    this.label = arg0;
  }

}
