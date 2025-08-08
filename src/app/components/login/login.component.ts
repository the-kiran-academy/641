import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: EmployeeService, private router: Router) { }



  userLogin = {
    username: '',
    password: ''
  }

  login() {
    this.service.login(this.userLogin).subscribe(res => {

      if (res != null) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert('Invalid Credientials !');
      }
    })


  }

}
