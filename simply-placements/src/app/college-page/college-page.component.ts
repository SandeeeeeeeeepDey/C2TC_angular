import { Component } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-college-page',
  templateUrl: './college-page.component.html',
  styleUrls: ['./college-page.component.scss']
})
export class CollegePageComponent {
  public loginChecked:boolean=true
  public collegeData=new Admin();
}
