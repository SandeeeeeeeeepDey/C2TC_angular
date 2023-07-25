import { Component } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public loginChecked:boolean=true
  public adminData=new Admin();
}
