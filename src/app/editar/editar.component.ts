import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Estado } from 'src/models/estado';
import {  Destinos } from 'src/models/destino';
import { Hotels } from 'src/models/hotels';
import { TipoDeHabitacion } from 'src/models/hotels';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {

  estados: Estado[];
  estadoseleccionado: Estado;
  nombreestadosel: string;
  destinos: Destinos[];
  hoteles: Hotels[];
  habs: TipoDeHabitacion[];


  constructor(private s: ServicioService) {

    this.s.getDestinos().subscribe(items => {
      console.log(items);
      this.destinos = items;
    } );
    this.s.getEstado().subscribe(items => {
      console.log(items);
      this.estados = items;
      console.log(this.estados);
      this.estadoseleccionado = this.estados[0];
      console.log(this.estadoseleccionado);
      this.nombreestadosel = this.estadoseleccionado.nombre;
      console.log(this.nombreestadosel);
    } );
    this.s.getHotels().subscribe(items => {
      console.log(items);
      this.hoteles = items;
    } );
    this.s.getTDH().subscribe(items => {
      console.log(items);
      this.habs = items;
    } );
  }
  onChange = () => {
    this.estadoseleccionado = this.estados.find((c) => c.nombre === this.nombreestadosel);
    console.log(this.estadoseleccionado);
  }

  // onChange2 = () => {
   // this.actualhotelObj = this.actualstateObj.hoteles.find((c) => c.nombre === this.actualhotel);
   // console.log(this.actualhotelObj);
  }//

