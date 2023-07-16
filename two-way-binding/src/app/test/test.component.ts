import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Two Way because-</h2>
  <p>Till event binding, we were giving the data to display from code to browser</p>
  <input [(ngModel)]="name" type="text" /><br>
  {{name}}
  <p>But here the browser is taking data brom us and using variable from code to store and display the entered data</p>
  <br>
  <h2>This is how I'll be using user input to work on</h2>
  <input [(ngModel)]="input" type="text" />
  <button (click)="onClick($event)"> Print</button>
  <br>
  {{output}}


  `,
  styles: []
})
export class TestComponent {
public name="Name or some label"
public input =""
public output=""
public onClick(event:any){
this.output=this.input
}
}
