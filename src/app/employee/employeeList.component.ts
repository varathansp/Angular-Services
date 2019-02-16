import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css'],
   
})
export class EmployeeListComponent implements OnInit {

    selectedEmployeeCountRadioButton: string = "All";
    employees: IEmployee[];
    statusMessage: string = "Loading data.Please Wait.";
    //employees:any[]=[
    constructor(private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
                (error) => {
                    this.statusMessage = 'Problem with the server.Please try again later';
                    console.log("from Component");
                    console.error(error);
                });
    }

    getEmployeesCount(): number {
        return this.employees.length;

    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}