import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


check: boolean;

  constructor(private router: Router) {

    this.check = false;

   }

  ngOnInit() {
  }

login() {



   const user: string = document.getElementById('user').nodeValue;
   const pasword: string = document.getElementById('password').nodeValue;
  console.log(user);
   if (user === 'sa' && pasword === 'sa' ) {
this.router.navigate(['misviajes']);
}

}

}
