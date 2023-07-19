import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
  <h3>For Loops in Angular</h3>
  
<div *ngFor="let condition of conditions;index as i">
  <p #cat [ngClass]="condition ? 'white' : 'black'">{{i}}Using for loop with ternary operator and ngClass classbinding </p>
</div>
 
  `,
  styles: [`
  .white{
    color:yellow;
  }
  .black{
    color:blue;
  }
  `]
})
export class NgForComponent {
  public conditions: Array<boolean> = [];
  public classesT="white"
  public classesF="black"
  constructor() {
    for (let i = 1; i <= 10; i++) {
      if(i%2==1)
      this.conditions.push(true);
      else
      this.conditions.push(false);
    }
  }

}
