import {Component} from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl: 'app/employee/employeeListCount.component.html',
    styleUrls: ['app/employee/employeeListCount.component.css'],

})

export class EmployeeListCount{
   all:number= 10;
   males:number= 5;
   female:number= 5;
}