import { Component } from '@angular/core';
import { ObservableType } from '../info-type';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
public names:ObservableType[]=[]
public errM:any;
constructor(private service:InfoService){}
ngOnInit(){
  this.service.getInfo().subscribe(data=>this.names=data,err=>this.errM=err)
}
}
