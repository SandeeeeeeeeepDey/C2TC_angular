import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Atributes nd Property</h2>
  // template reference []<br>
  <input [id]="myId" type="text" value="C2TC"> <br>
  // interpolation {{bracket}} <br>
  <input id={{myId}} type="text" value="C2TC"><br>
  // template reference variable #<br>
  <input #myId type="text" value="C2TC">
  {{myId.value}}
  

  `,
  styles: []
})
export class TestComponent {
public myId="";
public bracket="{}"
}
