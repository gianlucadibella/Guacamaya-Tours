import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Itinerario } from 'src/models/orden';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private s: ServicioService) { }

  orden = {
    nombreCliente: '',
    cedula: 0,
    correo: '',
    telefono: 0,
    direccion: '',
    itinerario: []
  };
  q: Itinerario = JSON.parse(localStorage.getItem('itinerario1'));
  w: Itinerario = JSON.parse(localStorage.getItem('itinerario2'));
  e: Itinerario = JSON.parse(localStorage.getItem('itinerario3'));
  r: Itinerario = JSON.parse(localStorage.getItem('itinerario4'));
  t: Itinerario = JSON.parse(localStorage.getItem('itinerario5'));

  check(){
    // tslint:disable-next-line: max-line-length
    if (this.orden.nombreCliente === '' || this.orden.cedula === 0 || this.orden.correo === '' || this.orden.telefono === 0 || this.orden.direccion === ''){
      return false;
    }
    if(this.orden.itinerario.length < 1) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    if (this.q != null) {
      this.orden.itinerario.push(this.q);
    }
    if (this.w != null) {
      this.orden.itinerario.push(this.w);
    }
    if (this.e != null) {
      this.orden.itinerario.push(this.e);
    }
    if (this.r != null) {
      this.orden.itinerario.push(this.r);
    }
    if (this.t != null) {
      this.orden.itinerario.push(this.t);
    }
  }

  onSubmit() {
    if(this.check()){
    this.s.addOrden(this.orden);
    localStorage.removeItem('itinerario1');
    localStorage.removeItem('itinerario2');
    localStorage.removeItem('itinerario3');
    localStorage.removeItem('itinerario4');
    localStorage.removeItem('itinerario5');

    }else{
      alert('Ingrese bien los datos');
    }
  }

}
