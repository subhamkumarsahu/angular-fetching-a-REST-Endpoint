import { Component } from '@angular/core';
import { EmployeeService } from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee$;
  constructor(private employeeService: EmployeeService){

  }
  fetchEmployee(){
    this.employee$ = this.employeeService.fetchEmployee();
  }
}
