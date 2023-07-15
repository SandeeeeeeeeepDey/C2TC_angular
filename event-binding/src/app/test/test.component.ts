import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Event Binding</h2>
  <label #id >Button</label><br>
  <button (click)="onClick($event)">Button</button>
  <br>
  {{logger}}
  <br>
  {{type}}
  `,
  styles: []
})
export class TestComponent {
public logger="is the event working?"
public type=""
public onClick(event:any){
this.logger="You just clicked the button to display that the event binding is taking info from the browser"
this.type=event.type
}
}
