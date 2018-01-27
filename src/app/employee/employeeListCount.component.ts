import {Component, Input} from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl: 'app/employee/employeeListCount.component.html',
    styleUrls: ['app/employee/employeeListCount.component.css'],

})

export class EmployeeListCount{
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
}