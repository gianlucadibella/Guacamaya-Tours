import { Component, OnInit } from '@angular/core';
import { TipoDeHabitacion, Hotels } from 'src/models/hotels';
import { ServicioService } from '../servicio.service';
import { Estado } from 'src/models/estado';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  estadoss: Estado[];
  estadoactual: Estado;
  eact: string = '';
  hoteless: Hotels[];
  hotelf: Hotels[];
  hotelactual: Hotels;
  hact: string = '';
  habitacioness: TipoDeHabitacion[];
  habitacionesf: TipoDeHabitacion[];
  habitacionactual: TipoDeHabitacion;
  habact: string = '';


  filtrar(){
  this.hotelf = this.hoteless.filter(hotel =>  hotel.estado === this.estadoactual.nombre);
  console.log(this.hotelf);
  this.habitacionesf = this.habitacioness.filter(hab =>  hab.hotel === this.hotelactual.nombre);
  }




  onChange = () => {
    this.estadoactual = this.estadoss.find((c) => c.nombre === this.eact);
    console.log(this.estadoactual);
  }

  onChange2 = () => {
    this.hotelactual = this.hotelf.find((c) => c.nombre === this.hact);
    console.log(this.hotelactual);
  }

  onChange3 = () => {
    this.habitacionactual = this.habitacionesf.find((c) => c.nombre === this.habact);
    console.log(this.habitacionactual);
  }




  cambiar() {
    this.eact = (document.getElementById('estados') as HTMLInputElement).value;
    console.log(this.eact);
    this.filtrar();
  }

  cambiar2() {
    this.hact = (document.getElementById('hss') as HTMLInputElement).value;
    console.log(this.hact);
    this.filtrar();
  }

  cambiar3() {
    this.habact = (document.getElementById('hss2') as HTMLInputElement).value;
    console.log(this.habact);
    this.filtrar();
  }


  constructor(private s: ServicioService) {

  }

  ngOnInit() {
    this.s.getHotels().subscribe(
      items=> {
        this.hoteless=items;
        console.log(this.hoteless);
      }
    )
    this.s.getEstado().subscribe(
      items=> {
        this.estadoss=items;
        console.log(this.estadoss);
        this.estadoactual = this.estadoss[0];
      }
    )
    this.s.getTDH().subscribe(
      items=> {
        this.habitacioness=items;
        console.log(this.habitacioness);
      }
    )
  }

}
