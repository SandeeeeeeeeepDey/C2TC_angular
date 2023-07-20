import { Component } from '@angular/core';
import { MappingServiceService } from '../mapping-service.service';

@Component({
  selector: 'app-epmloyees',
  templateUrl: './epmloyees.component.html',
  styleUrls: ['./epmloyees.component.scss']
})
export class EpmloyeesComponent {
public emp:{name:string}[]=[]
constructor(private map:MappingServiceService){}
ngOnInit(){
  this.emp=this.map.getInfo()
}
}
