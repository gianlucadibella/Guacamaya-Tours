import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-hotels-of-city',
  templateUrl: './hotels-of-city.component.html',
  styleUrls: ['./hotels-of-city.component.scss']
})
export class HotelsOfCityComponent implements OnInit {


  hoteles: Hotels[];
  estado: Estado [];

  filteresHotels: Hotels[];


  constructor(public ar: ActivatedRoute, private service: ServicioService, private s: ServiciosService) { }

  ngOnInit() {


    this.service.getHotels().subscribe( items => {

        this.hoteles = items.filter( e => e.estado === this.ar.snapshot.queryParams.name );
        console.log(this.hoteles);
      }
    );

  }


  cambiarHotelActual(h: Hotels){
    const x = this.s.setHotel(h);
    console.log(h);
  }

}
