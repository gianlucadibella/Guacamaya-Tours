import { Injectable } from '@angular/core';
import { Destinos } from 'src/models/destino';
import { Estado } from 'src/models/estado';
import { Hotels } from 'src/models/hotels';
import { Orden } from 'src/models/orden';
import { TipoDestino } from 'src/models/tipoDestino';
import { from } from 'rxjs';
import { ServicioService } from '../servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(s: ServicioService) { }

  hotel: Hotels;

  setHotel(xs: Hotels){
    this.hotel = xs;
  }

  getHotel(){
    return this.hotel;
  }

}
