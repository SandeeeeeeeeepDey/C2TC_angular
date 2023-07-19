import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div *ngIf="decision; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock >
    <h2> {{title}} </h2>
  </ng-template>
  <ng-template #elseBlock >
    <h2 #elseBlock>Could not find title</h2>
  </ng-template>
  
  `,
  styles: []
})
export class ChildComponent {
  
@Input() decision: boolean=false;
@Input() title:string=""
}
