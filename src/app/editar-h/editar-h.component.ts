import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-h',
  templateUrl: './editar-h.component.html',
  styleUrls: ['./editar-h.component.scss']
})
export class EditarHComponent implements OnInit {

  private sus : Subscription;

  constructor(private s: ServicioService) {
    this.s.getHotels().subscribe(
      items=> {
        this.hoteles=items;
        console.log(this.hoteles);
      }
    )
  }

  editHotel: boolean = false;
  addHotel: boolean = false;
  hoteles: Hotels[];
  estados: Estado[];
  hotelEditado: Hotels;
  hotel = {
    nombre: '',
    estado:'',
    fotos: '',
    estrellas: 0,
    info:'',
    latitud:'',
    direccion:'',
    longitud:'',
    wifi: false,
    fullday: false,
    transporte: false,
    piscina: false,
    gimnasio: false,
    animales: false,
    available: true,
    gugulmaps:'',
  }

  ngOnInit() {
    this.s.getEstado().subscribe(
      items=> {
        this.estados = items;
        console.log(this.estados);
      }
    )

    this.s.getHotels().subscribe(
      items=> {
        this.hoteles=items;
        console.log(this.hoteles);
      }
    )

  };

  onSubmit(){

    this.s.addHotel(this.hotel)
    this.hotel.nombre='';
    this.hotel.estado='';
    this.hotel.fotos='';
    this.hotel.estrellas=0;
    this.hotel.info='';
    this.hotel.wifi=false;
    this.hotel.fullday=false;
    this.hotel.transporte=false;
    this.hotel.piscina=false;
    this.hotel.gimnasio=false;
    this.hotel.animales=false;
    this.hotel.latitud='',
    this.hotel.direccion='';
    this.hotel.longitud='',
    this.hotel.available=true,
    this.hotel.gugulmaps='';


  }

  disp(){
    this.hotel.available=true;
  }
  disp1(){
    this.hotel.available=false;
  }
  disp2(){
    this.hotelEditado.available=true;
  }
  disp3(){
    this.hotelEditado.available=false;
  }

  wifi(){
    this.hotel.wifi = true;
  }
  wifi2(){
    this.hotel.wifi = false;
  }
  wifi3(){
    this.hotelEditado.wifi = true;
  }
  wifi4(){
    this.hotelEditado.wifi = false;
  }

  full(){
    this.hotel.fullday = true;
  }
  full2(){
    this.hotel.fullday = false;
  }
  full3(){
    this.hotelEditado.fullday = true;
  }
  full4(){
    this.hotelEditado.fullday = false;
  }

  carro(){
    this.hotel.transporte = true;
  }
  carro2(){
    this.hotel.transporte = false;
  }
  carro3(){
    this.hotelEditado.transporte = true;
  }
  carro4(){
    this.hotelEditado.transporte = false;
  }

  pool(){
    this.hotel.piscina = true;
  }
  pool2(){
    this.hotel.piscina = false;
  }
  pool3(){
    this.hotelEditado.piscina = true;
  }
  pool4(){
    this.hotelEditado.piscina = false;
  }

  gym(){
    this.hotel.gimnasio = true;
  }
  gym2(){
    this.hotel.gimnasio = false;
  }
  gym3(){
    this.hotelEditado.gimnasio = true;
  }
  gym4(){
    this.hotelEditado.gimnasio = false;
  }

  dog(){
    this.hotel.animales = true;
  }
  dog2(){
    this.hotel.animales = false;
  }
  dog3(){
    this.hotelEditado.animales = true;
  }
  dog4(){
    this.hotelEditado.animales = false;
  }

  
  deleteHotel(event, es: Hotels){
    this.clearState();
    this.s.deleteHotel(es);
  }

  editarHotel(event, es: Hotels){
    this.editHotel = true;
    this.hotelEditado = es;
  }

  updateHotel(es: Hotels){
    this.s.updateHotel(es);
    this.clearState();
  }

  clearState(){
    this.editHotel = false;
    this.hotelEditado = null;
  }

  addiHotel(){
    this.addHotel = true;
  }
  cerrar(){
    this.addHotel = false;
  }

}
