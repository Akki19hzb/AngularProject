import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeeList.component';
import {EmployeeListPipe} from './employee/employeeListPipe';
import {EmployeeListCount} from './employee/employeeListCount.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeComponent, EmployeeListComponent,EmployeeListPipe,EmployeeListCount],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
