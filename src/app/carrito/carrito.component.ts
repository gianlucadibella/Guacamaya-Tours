import { Component, OnInit } from '@angular/core';
import { Itinerario } from 'src/models/orden';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  itinerarios: Itinerario[] = [];

  constructor(private s: ServicioService) { }

  q;
  orden: {
  nombreCliente: '',
  cedula: 0,
  correo: '',
  telefono: 0,
  direccion: '',
  localizador: 0,
  itinerario: Itinerario[];
  };

  ngOnInit() {
    this.itinerarios = [];
   // try{
    this.q = JSON.parse(localStorage.getItem('itinerario1'));
    console.log(this.q);
    this.itinerarios[0] = this.q;
    console.log(this.itinerarios[0].fecha[0]);
    console.log(this.itinerarios[0].fecha[1]);
    console.log(this.itinerarios[0].costoTotal);
    console.log(this.itinerarios[0].tipoHabitacion);


    console.log(this.itinerarios);
  //  }catch(Exception ){}

    // try{
    //   this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario2')));
    // }catch(Exception ){}

    // try{
    //   this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario3')));
    // }catch(Exception ){}

    // try{
    //   this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario4')));
    // }catch(Exception ){}

    // try{
    //   this.itinerarios.push(JSON.parse(localStorage.getItem('itinerario5')));
    // }catch(Exception ){}
    // this.orden.itinerario = this.itinerarios;
  }

  onSubmit() {
    this.s.addOrden(this.orden);
  }

}
