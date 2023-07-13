import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{topic}}</h2>
  <p>Using {{brackets}} to print variables in the TestComponent class </p>
  <p>Using {{brackets}} to print sum of two integers 6 and 7 = {{6+7}} </p>
  <p>Using {{topic}} to to concat strings, like {{concat}}, for example: {{apple+ " to " +ball}}  </p>
  <p>Using {{topic}} to to print a function on page: {{fn()}} </p>
  `,
  styles: []
})
export class TestComponent {
public topic="Interpolation"
public brackets="{{variable_name}}"
public concat="{{\"A string \" +variable_name+\" another string \"}}"
public apple="apple"
public ball="ball"
public url=window.location.href
public fn(){
  return "This is the return of a function: "+this.url
}

}
