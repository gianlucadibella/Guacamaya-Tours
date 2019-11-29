import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Itinerario } from 'src/models/orden';
import { TipoDeHabitacion } from 'src/models/hotels';
import { RouterLink, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private s: ServicioService, private serv: ServiciosService, public router: Router) { }
  cuenta = 0;
  orden = {
    nombreCliente: '',
    cedula: 0,
    correo: '',
    telefono: 0,
    direccion: '',
    itinerario: []
  };
  habs: TipoDeHabitacion[];
  habs2: TipoDeHabitacion[];
  cuenta2: number[] = [];
  nombres: string[] = [];
  q: Itinerario = JSON.parse(localStorage.getItem('itinerario1'));
  w: Itinerario = JSON.parse(localStorage.getItem('itinerario2'));
  e: Itinerario = JSON.parse(localStorage.getItem('itinerario3'));
  r: Itinerario = JSON.parse(localStorage.getItem('itinerario4'));
  t: Itinerario = JSON.parse(localStorage.getItem('itinerario5'));

  check() {
    // tslint:disable-next-line: max-line-length
    if (this.orden.nombreCliente === '' || this.orden.cedula === 0 || this.orden.correo === '' || this.orden.telefono === 0 || this.orden.direccion === '') {
      return false;
    }
    if (this.orden.itinerario.length < 1) {
      return false;
    }
    return true;
  }

  ngOnInit() {


    this.s.getTDH().subscribe(
      items => {
        this.habs = items;
      }
    );

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
    if (this.check()) {
      for (const itinerario of this.orden.itinerario) {
        for (const hab of itinerario.tipoHabitacion) {
        this.cuenta2.push(hab.cantidad);
        this.nombres.push(hab.hotel);
        }
      }
      this.cuenta2.forEach((item, index) => {
        this.habs2 = this.habs.filter( hab => hab.hotel === this.nombres[index]);
      });
      this.habs2.forEach((item, index) => {
        item.cantidadM = (item.cantidadM - this.cuenta2[index]);
        item.cantidad = item.cantidadM;
        if (item.cantidadM === 0) {
          item.available = false;
        }
        this.s.updateHab(item);
      });

      this.s.addOrden(this.orden);
      this.serv.setOrden(this.orden);
      this.serv.setPrice(0);
      localStorage.removeItem('itinerario1');
      localStorage.removeItem('itinerario2');
      localStorage.removeItem('itinerario3');
      localStorage.removeItem('itinerario4');
      localStorage.removeItem('itinerario5');
      this.router.navigateByUrl('/pago');
    } else {
      alert('Ingrese bien los datos');
    }
  }

}
