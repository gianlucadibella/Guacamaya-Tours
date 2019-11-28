import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';
import { Hotels } from 'src/models/hotels';
import { Destinos } from 'src/models/destino';
import { Estado } from 'src/models/estado';


@Component({
  selector: 'app-explore-hotels',
  templateUrl: './explore-hotels.component.html',
  styleUrls: ['./explore-hotels.component.scss']
})
export class ExploreHotelsComponent implements OnInit {

hoteles: Hotels[];
destinos: Destinos [];
estados: Estado[];

  constructor(public router: Router, private service: ServicioService) { }

  ngOnInit() {

    this.service.getHotels().subscribe(
      items => {
        this.hoteles = items;
        console.log(this.hoteles);
      }
    );

    this.service.getDestinos().subscribe(
      items => {
        this.destinos = items;
        console.log(this.destinos);
      }
    );

    this.service.getEstado().subscribe(
      items => {
        this.estados = items;
        console.log(this.estados);
      }
    );

  }

  checkHotelsDetails(itemName: string) {

    this.router.navigate(['/detalle-hoteles'], {queryParams: { name: itemName}});

  }

}
