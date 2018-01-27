import {Component} from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
})

export class EmployeeComponent {
    colspan: number = 2;
    firstName: string = 'Rahul';
    lastName: string = 'Ranjan';
    gender: string = 'Male';
    age: number = 25;
    showDetails: boolean = false;

    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}
