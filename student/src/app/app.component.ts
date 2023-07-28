import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'student-module';

  studentDetails = null as any;
  studentToUpdate = {
    id:"",
    name:"",
    college:"",
    roll:"",
    qualification:"",
    course:"",
    year:"",
    certificate:"",
    hallTicketNo:"",
  }

  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }
	
  register(registerForm : any) {
   					console.log(registerForm.value)
 							 }
  getStudentsDetails() {
                  
                }
  deleteStudent(student: any){
									
                                              }
   edit(student: any){
                  this.studentToUpdate = student;}
                
   updateStudent(){
                   
                        }
}