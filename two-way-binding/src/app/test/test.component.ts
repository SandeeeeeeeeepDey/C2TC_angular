import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div>
    <h2>Two Way because-</h2>
  </div>

  <div>
    <br>
    <strong>Task 1:</strong>
    <!-- for basic two way binding, using [()] and ngModel -->
    <p>Till event binding, we were giving the data to display from code to browser</p>
    <input [(ngModel)]="name" type="text" />
    <br>
    {{name}}
    <p>But here the browser is taking data brom us and using variable from code to store and display the entered data</p>
    <br>
  </div>
  
  
<!-- ____________________________________________________________________________________________________________________________________ -->
  <div>
    <br>
    <strong>Task 2:</strong>
    <!-- Ill get input from ngModel, and will print output on click of a button -->
    <p>This is how I'll be using user input and work on it</p>
    <input [(ngModel)]="input" type="text" />
    <button (click)="onClick($event)"> Print</button> 
    <br>
    {{output}}
    <br>
  </div>
  

<!-- ____________________________________________________________________________________________________________________________________ -->
  <div>
    <br>
    <strong>Task 3:</strong>
    <!-- Try on split binding, to add funtionality in between -->
    <br>
    <label for="test">type more than 5 characters to display</label><br>
    <input id="test" [ngModel]="testName" (ngModelChange)="testClick($event)" type="text" />
    <p>{{testName}}</p> <!-- using ngModelChange to break the binding to add functionality in between -->
    <br>
  </div>
  

<!-- ____________________________________________________________________________________________________________________________________ -->
  <div>
    <br>
    <strong>Task 4:</strong>
    <!-- To use Getters and Setters in between -->
    <p>enter atleast 7 letters to enable submit</p>  
    <input [(ngModel)]="usingGnS" type="text">
    <button [disabled]="isD" (click)="onclickTwo($event)">submit</button>
    {{naamL}} <br>
    {{out}}<!-- Using the getter setter to add functionality in between and using a button to display with additional functionality -->
    <br>
  </div>


<!-- ____________________________________________________________________________________________________________________________________ -->
  <div>
    <strong> Task 5:</strong>
    <p>Focus first on me</p>
    <input #focusId type="text" [(ngModel)]="focus">
    <p>{{focus}}</p>
  </div>

  `,
  styles: []
})
export class TestComponent implements AfterViewInit {
  // task 1
public name="Name or some label"

// task 2
public input =""
public output=""
public onClick(event:any){
this.output=this.input
}

// task 3
public testName="";
public testClick(event:string){
  // this.testName=event
  if(event.length>5)
  {
  this.testName=event // adding value to testName only when length of value is >5
}
  else 
  {
  this.testName=""}
 
}

// tast 4
private naam=""
public naamL=0
get usingGnS():string{  // getter of string type
  return this.naam
}
set usingGnS(value:string){ // setter of string
  this.naam=value
  this.naamL=value.length
  if(this.naamL>=7) this.isD= false // button enable Condition
  else this.isD= true
}

public out=""
public isD=true;
onclickTwo(event:any){ // for onclick function
if(this.naam.length>=7){
  this.out=this.naam
  }
  
}

public focus=""
// @ViewChild('focusId') refToFocusOn: ElementRef;
// ngAfterViewInit() {
//   this.refToFocusOn.nativeElement.focus();
  
// }
ngAfterViewInit() {}

}
