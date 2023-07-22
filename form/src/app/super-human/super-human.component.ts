import { Component, ViewChild } from '@angular/core';
import { ObservableList } from '../observable';
import { CreateService } from '../create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-super-human',
  templateUrl: './super-human.component.html',
  styleUrls: ['./super-human.component.scss']
})
export class SuperHumanComponent {
  public abilities=['Not afraid of cockroaches','Fly','Super-Saiyan','Strength','Smart','Hardworker','Invincible','Indefatigable','Invisible']
  public options=['Keep trying','Give it your all','Try until last breath']
  public info=new ObservableList()
  
  public abilityInvalid=true
  abilityValidity(value:any){
    if(value==="Select Your Primary Ability") this.abilityInvalid=true
    else this.abilityInvalid=false
  }
  constructor(private services:CreateService){}

  @ViewChild('superForm') superForm!: NgForm;
  onSubmit(){
    if(this.superForm.valid)
    this.services.post(this.info).subscribe(data=>console.log("Success",data),error=>console.log("failed", error))
    else {
      console.log("File Not Submitted Properly")
    }
  }
}
