import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { TipoDeHabitacion, Hotels } from 'src/models/hotels';

@Component({
  selector: 'app-editar-habs',
  templateUrl: './editar-habs.component.html',
  styleUrls: ['./editar-habs.component.scss']
})
export class EditarHabsComponent implements OnInit {

  constructor(private s: ServicioService) { }

  editHab = false;
  addHab= false;
  hoteles: Hotels[];
  habitaciones: TipoDeHabitacion[];
  habEditada: TipoDeHabitacion;
  habitacion = {
    hotel: '',
    nombre: '',
    fotos: '',
    maximoDePersonas: 0,
    info: '',
    aire: false,
    tv: false,
    nevera: false,
    jacuzzi: false,
    available: true,
    cantidad:0,
    cantidadM: 0,
    precio:0

  }

  ngOnInit() {

    this.s.getHotels().subscribe(
      items=> {
        this.hoteles = items;
        console.log(this.hoteles);
      }
    )

    this.s.getTDH().subscribe(
      items => {
        this.habitaciones = items;
        console.log(this.habitaciones);
      }
    )

  }

  onSubmit(){
    this.habitacion.cantidadM = this.habitacion.cantidad;
    this.s.addHab(this.habitacion);
    this.habitacion.hotel = '';
    this.habitacion.nombre = '';
    this.habitacion.fotos = '';
    this.habitacion.maximoDePersonas = 0;
    this.habitacion.info = '';
    this.habitacion.aire = false;
    this.habitacion.tv = false;
    this.habitacion.nevera = false;
    this.habitacion.available = true;
    this.habitacion.cantidad = 0;
    this.habitacion.cantidadM = 0;
    this.habitacion.precio = 0;
  }

  disp(){
    this.habitacion.available=true;
  }
  disp1(){
    this.habitacion.available=false;
  }
  disp2(){
    this.habEditada.available=true;
  }
  disp3(){
    this.habEditada.available=false;
  }

  Aire(){
    this.habitacion.aire =true;
  }
  Aire2(){
    this.habitacion.aire =false;
  }
  Aire3(){
    this.habEditada.aire =true;
  }
  Aire4(){
    this.habEditada.aire =false;
  }
  TV(){
    this.habitacion.tv = true;
  }
  TV2(){
    this.habitacion.tv = false;
  }
  TV3(){
    this.habEditada.tv = true;
  }
  TV4(){
    this.habEditada.tv = false;
  }
  nevera(){
    this.habitacion.nevera = true;
  }
  nevera2(){
    this.habitacion.nevera = false;
  }
  nevera3(){
    this.habEditada.nevera = true;
  }
  nevera4(){
    this.habEditada.nevera = false;
  }
  jacuzzi(){
    this.habitacion.jacuzzi = true;
  }
  jacuzzi2(){
    this.habitacion.jacuzzi = false;
  }
  jacuzzi3(){
    this.habEditada.jacuzzi = true;
  }
  jacuzzi4(){
    this.habEditada.jacuzzi = false;
  }



  deleteHab(event, es: TipoDeHabitacion){
    this.clearState();
    this.s.deleteHab(es);
  }

  editarHab(event, es: TipoDeHabitacion){
    this.editHab = true;
    this.habEditada = es;
  }

  updateHab (es: TipoDeHabitacion){
    es.cantidadM = this.habEditada.cantidad;
    this.s.updateHab(es);
    this.clearState();
  }

  clearState(){
    this.editHab = false;
    this.habEditada = null;
  }

  addiHab(){
    this.addHab = true;
  }

  cerrar(){
    this.addHab = false;
  }

}
