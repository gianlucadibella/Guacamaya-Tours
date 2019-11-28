import { Component, OnInit } from '@angular/core';
import { Itinerario } from 'src/models/orden';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private s: ServicioService) { }

  itinerarios: Itinerario[] = [];
  orden: {
  nombreCliente: '',
  cedula: 0,
  correo: '',
  telefono: 0,
  direccion: '',
  localizador: 0,
  itinerario: Itinerario[]
  }

  ngOnInit() {
    this.itinerarios = [];
    try{
      this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario1')));
    }catch(Exception ){}

    try{
      this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario2')));
    }catch(Exception ){}

    try{
      this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario3')));
    }catch(Exception ){}

    try{
      this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario4')));
    }catch(Exception ){}

    try{
      this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario5')));
    }catch(Exception ){}
    this.orden.itinerario = this.itinerarios;
  }

  onSubmit(){
    this.s.addOrden(this.orden);
  }

}
