import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Itinerario } from 'src/models/orden';
@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

check: boolean;

downloadPDF() {
  const doc = new jsPDF();
  doc.text('RESERVACION DE ITINERARIO', 10, 10);
  doc.save('Itinerario.pdf');
}
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
      this.downloadPDF();
  } else {
    this.check = true;
  }
  }


}
