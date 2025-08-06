import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: EmployeeService, private router: Router) { }

  employee = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  }
  )

  register() {
    this.service.register(this.employee.value).subscribe(
      {
        next: (res) => {
          alert('User Added !')
        },
        error: (httpErrorResponse) => {
          console.log('====================================');
          console.log(httpErrorResponse);
          console.log('====================================');
          alert(httpErrorResponse.error.message)
        }
      }
    )


  }


}
