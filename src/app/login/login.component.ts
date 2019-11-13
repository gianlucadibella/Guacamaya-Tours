import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../services/admin.service';

import { AppComponent } from '../app.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {


check: boolean;


  constructor(private router: Router, private ser: ServicioService, private adminService: AdminService) {

    this.check = false;

   }

  ngOnInit() {
  }

 loginUser(event) {

  event.preventDefault();
  const target = event.target;
  const userCheck = target.querySelector('#username').value;

  const paswordCheck = target.querySelector('#password').value;
  console.log(userCheck, paswordCheck );
  if ( userCheck === 'admin' && paswordCheck === '123') {
    this.adminService.continue = true;
    this.router.navigate(['admin']);
    this.ser.cambiar(true);
  } else {
    this.adminService.continue = false;
    this.check = true;
  }




}




}
