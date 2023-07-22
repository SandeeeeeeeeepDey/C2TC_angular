import { Component } from '@angular/core';
import { ObservableList } from '../observable';
import { CreateService } from '../create.service';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent {
public abilities=['Fly','Super-Saiyan','Strength','Smart','Hardworker','Invincible','Indefatigable','Invisible']
public options=['Doors','Wheels','Both are same']
public userModel=new ObservableList()

abilityHasErr=true;
validateAbility(value:any){
  if(value==="Select Your Primary Ability") this.abilityHasErr=true
  else this.abilityHasErr=false
}

constructor(private services:CreateService){}
onSubmit() {
  console.log(this.userModel)
  this.services.post(this.userModel).subscribe(data=>console.log("Success",data),error=>console.log("fail",error))
  
}
  

}
