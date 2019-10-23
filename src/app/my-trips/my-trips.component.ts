import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

check: boolean;

  constructor(private router: Router) {
    this.check = false;
  }

  ngOnInit() {
  }

  verificationCode(event) {
    event.preventDefault();
    const target = event.target;
    const reservationCheck = target.querySelector('#reservationcode').value;
    console.log(reservationCheck);
    if ( reservationCheck === 'DEMO') {
      this.check = false;
  } else {
    this.check = true;
  }
  }


}
