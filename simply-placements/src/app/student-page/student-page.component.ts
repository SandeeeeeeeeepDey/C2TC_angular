import { Component, ViewChild } from '@angular/core';
import { Admin } from '../admin';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {
  public loginChecked:boolean=true
  public studentData=new Admin();
  constructor(private router:Router, private service:CrudService){}
  @ViewChild('student') studentForm!: NgForm;
  onSubmit(){
    if(this.studentForm.valid){
      this.router.navigate(['/home/student'])
    }else console.log("nope")
  }
}
