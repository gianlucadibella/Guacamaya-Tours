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

  constructor(private s: ServicioService) { }

  hotel: Hotels;
  orden: Orden;
  nombre: string;
  ordenes: Orden[];
  precio: number;

  setPrice(precio: number){
    this.precio =precio;
  }

  getPrice(){
    return this.precio;
  }

  setHotel(xs: Hotels){
    this.hotel = xs;
  }
  setOrden(xs: Orden){
    this.orden = xs;
    this.nombre = this.orden.nombreCliente;
  }
  getOrden(){
    return this.orden;
  }

  getHotel(){
    return this.hotel;
  }

}
