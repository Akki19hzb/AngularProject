import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
//  
// <list-employee></list-employee>
// <my-employee></my-employee> 
export class AppComponent {
  isBold: boolean = true;
  pageHeader: string = 'Employee Details';
  isdisabled: boolean = false;
  name:string="Tom";

  onClick() :void{
    console.log("Button Clicked");
  }
  
}


//******* class Binding*******************
/*<div><h1>{{pageHeader}}</h1></div>
<my-employee></my-employee>
<button [disabled]='isdisabled' style= color:red [style.font-weight]="isBold?'bold':'normal' ">Click Me</button> 
<button class="colorClass" [class]='classesToApply'>Click Me</button> 
<button class="colorClass" [ngClass]='applyClasses()'>Click Me</button> */

/*  In AppComponentClass
classesToApply: string = 'italicClass boldClass';
applyBoldClasses: boolean = true;
applyItalicsClasses: boolean = true;

applyClasses() {
  let classes{
    boldClass: this.applyBoldClasses,
    italicClass: this.applyItalicsClasses
  }
  return classes;
}*/
//*****************************
