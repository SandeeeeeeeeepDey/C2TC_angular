import { Component , OnInit} from '@angular/core';
import { MappingServiceService } from '../mapping-service.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent  {
public employees:{id:number; name:string; skills:string}[]=[];

constructor(private mappingService:MappingServiceService){}

ngOnInit() {
  this.employees = this.mappingService.getInfo();
}


}
