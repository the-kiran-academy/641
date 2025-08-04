import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  employee!: FormGroup;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.employee = new FormGroup({
      id:  new FormControl(''),
      email: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.service.getEmpById(id).subscribe(res => {

      this.employee.patchValue({
        id:res.id,
        email: res.email,
        name: res.name,
        password: res.password
      });

    })

  }



  update() {

    console.log('==============updated======================');
    console.log(this.employee.value);
    console.log('====================================');

    this.service.updateEmployee(this.employee.value).subscribe(res => {
      if (res) {
        alert('Employee Updated');
        this.router.navigateByUrl('dashboard');

      } else {
        alert('Something went wrong')
      }
    })


  }

}
