import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  template: `
  <h3>If Else Statements in Angular</h3>
  <p *ngIf="falsey; else elseBlock">prints if true </p>
  <ng-template #elseBlock>
  <p>This will occur when condition is false</p>
  </ng-template>
  <div *ngIf="truthy; then thenBlock; else elseBlock"> </div>
  <ng-template #thenBlock>
  <p>This will occur when condition is true but in then block</p>
  </ng-template>
  <ng-template #elseBlock>
  <p>This will occur when condition is false</p>
  </ng-template>

  `,
  styles: []
})
export class NgIfElseComponent {
public truthy=true
public falsey=false
}
