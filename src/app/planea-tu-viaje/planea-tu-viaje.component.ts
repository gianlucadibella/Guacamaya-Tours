import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planea-tu-viaje',
  templateUrl: './planea-tu-viaje.component.html',
  styleUrls: ['./planea-tu-viaje.component.scss']
})
export class PlaneaTuViajeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  checkDestinationsDetails(itemName: string) {

    this.router.navigate(['/posibles-destinos'], {queryParams: { name: itemName}});

  }

}
