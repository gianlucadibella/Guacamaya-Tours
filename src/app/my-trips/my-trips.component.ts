import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Orden } from 'src/models/orden';
import { Itinerario } from 'src/models/orden';
import { ServicioService } from '../servicio.service';
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
  constructor(private router: Router, private s: ServicioService) {
    this.check = false;
  }

  orden: Orden[];
  ordenes: Orden[];

  ngOnInit() {
    this.s.getOrden().subscribe(items=>{
      this.orden = items;
    })
  }

  ok(){}

  verificationCode(event) {
    const target = event.target;
    const reservationCheck = target.querySelector('#reservationcode').value;
    console.log(reservationCheck);

    this.ordenes = this.orden.filter(item => item.telefono === reservationCheck);
  }


}
