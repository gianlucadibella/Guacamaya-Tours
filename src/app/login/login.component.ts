import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  user = '';
  pass = '';

  private comp = new AppComponent();
  constructor( private router: Router) {

   }

  ngOnInit() {
  }

  check() {

    console.log(this.comp.home);
    this.comp.modoA();
    console.log(this.comp.home);


  }



}
