import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD


=======
import { AppComponent } from '../app.component';
>>>>>>> develop-3

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

<<<<<<< HEAD

check: boolean;


  constructor(private router: Router) {

    this.check = false;
=======
  user = '';
  pass = '';

  private comp = new AppComponent();
  constructor( private router: Router) {
>>>>>>> develop-3

   }

  ngOnInit() {
  }

<<<<<<< HEAD
 loginUser(event) {

  event.preventDefault();
  const target = event.target;
  const userCheck = target.querySelector('#username').value;

  const paswordCheck = target.querySelector('#password').value;
  console.log(userCheck, paswordCheck );
  if ( userCheck === 'admin' && paswordCheck === '123') {
    this.router.navigate(['admin']);
  } else {
    this.check = true;
  }




}
=======
  check() {

    console.log(this.comp.home);
    this.comp.modoA();
    console.log(this.comp.home);


  }


>>>>>>> develop-3

}
