import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Estado } from 'src/models/estado';
import {  Destinos } from 'src/models/destino';
import { Hotels } from 'src/models/hotels';
import { TipoDeHabitacion } from 'src/models/hotels';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  editState: boolean = false;
  estadoEditado: Estado;
  estadoEditado2 = {
    nombre: '',
    info:'',
    imagen: '',
    available: true
  }

  estados: Estado[];
  destinos: Destinos[];
  hoteles: Hotels[];
  habs: TipoDeHabitacion[];
  estado = {
    nombre: '',
    info:'',
    imagen: '',
    available: true
  };
  estado2: Estado = {
    nombre: '',
    info:'',
    imagen: '',
    available: true
  };


  ngOnInit() {
    this.s.getEstado().subscribe(
      items => {
        console.log(items);
        this.estados=items;

        console.log(this.estados);
      }
    );
    console.log(this.estados);
    this.s.getDestinos().subscribe(
      items => {
        this.destinos=items;
      }
    );
    console.log(this.destinos);
    this.s.getHotels().subscribe( 
      items => {
        this.hoteles=items;
      }
    );
    console.log(this.hoteles);
    this.s.getTDH().subscribe( 
      items => {
        this.habs=items;
      }
    );
    console.log(this.habs);

  }

  constructor(private s: ServicioService, private fs: AngularFirestore) {  }

  onSubmit(){
    if(this.estado.nombre != '' && this.estado.info != ''){
      this.estado2.imagen = this.estado.imagen;
      this.estado2.info = this.estado.info;
      this.estado2.nombre = this.estado.nombre;
      this.estado2.available = this.estado.available;
      this.s.addEstado(this.estado2);
      this.estado.nombre = '';
      this.estado.info = '';
      // tslint:disable-next-line: no-unused-expression
      this.estado.imagen = '';
      // tslint:disable-next-line: no-unused-expression
      this.estado.available = true;
    }
  }

  disp(){
    this.estado.available=true;
  }
  disp1(){
    this.estado.available=false;
  }
  disp2(){
    this.estadoEditado.available=true;
  }
  disp3(){
    this.estadoEditado.available=false;
  }


  deleteEstado(event, es: Estado){
    this.clearState();
    this.s.deleteEstado(es);
  }

  editEstado(event, es: Estado){
    this.editState = true;
    this.estadoEditado = es;
  }

  updateEstado(es: Estado){
    this.s.updateEstado(es);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.estadoEditado = null;
  }


  }

