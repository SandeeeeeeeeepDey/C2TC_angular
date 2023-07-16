import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
  <h3>Switches Statements in Angular</h3>
  <div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">The color is red</p>
  <p *ngSwitchCase="'orange'">The color is orange</p>
  <p *ngSwitchCase="'yellow'">The color is yellow</p>
  <p *ngSwitchDefault>None of the color</p>
  </div>
  `,
  styles: []
})
export class NgSwitchComponent {
  public color="red"
}
