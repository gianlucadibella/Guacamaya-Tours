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
    comodidades: '',
    available: true,
    cantidad:0,
    precio:0

  }

  ngOnInit() {

    this.s.getHotels().subscribe(
      items=> {
        this.hoteles = items;
        console.log(this.habitaciones);
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
    this.s.addHab(this.habitacion);
    this.habitacion.hotel = '';
    this.habitacion.nombre = '';
    this.habitacion.fotos = '';
    this.habitacion.maximoDePersonas = 0;
    this.habitacion.info = '';
    this.habitacion.comodidades = '';
    this.habitacion.available = true;
    this.habitacion.cantidad = 0;
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
  
  deleteHab(event, es: TipoDeHabitacion){
    this.clearState();
    this.s.deleteHab(es);
  }

  editarHab(event, es: TipoDeHabitacion){
    this.editHab = true;
    this.habEditada = es;
  }

  updateHab (es: TipoDeHabitacion){
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
