import { Component } from '@angular/core';
import { ObservableType } from '../info-type';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.scss']
})
export class FullInfoComponent {

  public list:ObservableType[]=[]
  public errM:any;
  constructor(private service:InfoService){}
  ngOnInit(): void{
    this.service.getInfo().subscribe(data=>this.list=data,error=>this.errM=error)
  }
}
