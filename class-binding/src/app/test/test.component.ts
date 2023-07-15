import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div [style.background-color]="'black'">
  <h2 class="flower" >Class Binding</h2>
  <h2 [class]="flower" >Class Binding</h2>
  <h2 [class.water]=true >Class Binding</h2>
  <h2 [ngClass]="styleArr" >Class Binding</h2>
  </div>
  `,
  styles: [`
    .flower{
      color:pink;
    }
    .fire{
      color:orange;
    }
    .nature{
      color:green;
    }
    .water{
      color:lightblue;
    }
    `
  ]
})
export class TestComponent {
 public flower="fire"
 public styleArr={
  "flower":true, 
  "fire":true,
  "nature":true,
  "water":false
 }
}
