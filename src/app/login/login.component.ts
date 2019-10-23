import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


check: boolean;
user: 'admin';
pasword; '123';

  constructor(private router: Router) {

    this.check = false;

   }

  ngOnInit() {
  }

 login() {



   const userCheck = document.getElementById('checkUser').nodeValue;
   const paswordCheck = document.getElementById('password');
console.log(userCheck);
   this.router.navigate(['misviajes']);



}

}
