import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { checker } from './validation/pattern-val';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Constructor with user defined Crud service and FormBuilder for validation
  constructor(private fb:FormBuilder, private service:CrudService){
    this.getStudents() // to start with the list
  }


// Main Registration Form
  // For easy access to form contents
  get vroll(){return this.registrationForm.get('roll')}
  get vname(){return this.registrationForm.get('name')}
  get vcity(){return this.registrationForm.get('city');}
  get vpercentage(){return this.registrationForm.get('percentage')}

  // Validation
  registrationForm=this.fb.group({
    roll:['',[Validators.required,checker(/^[1-9][0-9]{2}$/)]],
    name:['',[Validators.required,checker(/^[A-Za-z ]{1,50}$/)]],
    city:['',[Validators.required,checker(/^[A-Za-z ]{1,50}$/)]],
    percentage:['',[Validators.required,checker(/^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$|^0(\.[0-9]{1,2})?$/)]],
  })
  isFormSubmitted=false // submit validation
//-----------------------------------------------------------------------POST
  // On Register Button click
  onSubmit(){
    if(this.registrationForm.valid){
      this.service.registerStudent(this.registrationForm.value)
      .subscribe((body)=>{
        console.log('Success',body)
        this.registrationForm.reset();
        this.isFormSubmitted=false
        this.getStudents();
      },(err)=>{console.log(err)})
      
    }else{
      this.isFormSubmitted=true
    }
  }

//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
  // GET List Of Students From DB
  listOfStudent=null as any
  getStudents(){
    this.service.listStudents().subscribe((bodys)=>{console.log(bodys); this.listOfStudent=bodys},(err)=>console.log(err))
  }
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
   // Delete Student from DB
  removeStudent(student:any){
    this.service.deleteStudent(student)
    .subscribe((body)=>{
      console.log(body)
      this.getStudents()
    },(err)=>{console.log(err)})
  }
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
// Modal Form or Edit Form

  // Easy Access for Validation 
  @ViewChild('modalClose') closeBtn!: ElementRef;
  get eroll(){return this.editForm.get('roll')}
  get ename(){return this.editForm.get('name')}
  get ecity(){return this.editForm.get('city');}
  get epercentage(){return this.editForm.get('percentage')}

  // Validation
  editForm=this.fb.group({
    roll:['',[Validators.required,checker(/^[1-9][0-9]{2}$/)]],
    name:['',[Validators.required,checker(/^[A-Za-z ]{1,50}$/)]],
    city:['',[Validators.required,checker(/^[A-Za-z ]{1,50}$/)]],
    percentage:['',[Validators.required,checker(/^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$|^0(\.[0-9]{1,2})?$/)]],
  })
  isEditSubmitted=false // error submit validation

  // Object modal of current student for update
  studentToUpdate={
    roll:"",
    name:"",
    city:"",
    percentage:""
  }
  // Update method
  updateStudent(student:any){

    this.studentToUpdate = { ...student };
    this.editForm.patchValue({
    roll: student.roll, 
    name: student.name,
    city: student.city,
    percentage: student.percentage,
    }); // To get the Modal Form with Old Values
    
    if(this.editForm.valid){
    this.service.updateStudent(this.studentToUpdate).subscribe((body)=>{
      console.log(body)
      this.getStudents()
      this.closeBtn.nativeElement.click()
    },(err)=>{console.log(err)})
    }
    else this.isEditSubmitted=true
  }

  

}
