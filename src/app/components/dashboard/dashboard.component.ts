import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: any;
  constructor(private service: EmployeeService) { }


  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.service.getAllEmployee().subscribe(res => {
      this.employees = res;
    })
  }

}
