import { Component } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent {
  public loginChecked:boolean=true
  public companyData=new Admin();
}
