import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 class="flower" >Class Binding</h2>
  <h2 [style.color]="'yellow'" >Class Binding</h2>
  <h2 [style.color]="errr?'yellow':'orange'" >Class Binding</h2>
  <h2 [style.color]="err?'yellow':'red'" >Class Binding</h2>

  `,
  styleUrls: []
})
export class TestComponent {
public errr=false
public err=true;
// public errLoop(){
//   if(this.err)
//   setTimeout(()=>{
//      this.err=!this.err
//   },3000)
//   if(!this.err)
//   setTimeout(()=>{
//      this.err=!this.err
//   },3000)
//   return this.err
// }
}
