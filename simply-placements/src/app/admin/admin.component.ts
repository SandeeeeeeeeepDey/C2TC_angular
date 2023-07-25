import { Component } from '@angular/core';
import { Admin } from '../admin';
import { FormBuilder, Validators} from '@angular/forms';
import { checker } from '../validators/custom-pattern';
import { confirmPass } from '../validators/conf-pass';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public loginChecked:boolean=true
  public adminData=new Admin();

get lName(){
  return this.loginForm.get('adminName');
}

  setLoginChecked(value: boolean) {
    this.loginChecked = value;
  }
  constructor(private fb:FormBuilder){}

  regForm=this.fb.group({
    adminName: ['hndhn',[Validators.required, checker(/hvh/)]],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required]
  },{validator:confirmPass})

  
  loginForm=this.fb.group({
    adminName: ['jhbbh',[Validators.required, checker(/hvh/)]],
    adminPass: ['',Validators.required],
    
  })

isFormSubmitted=false
  onSubmit(){
    this.isFormSubmitted=true
  }

  
}
