import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/models/destino';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-editar2',
  templateUrl: './editar2.component.html',
  styleUrls: ['./editar2.component.scss']
})
export class Editar2Component implements OnInit {

  constructor(private s: ServicioService) { }

  editDesti: boolean = false;
  destinos: Destinos[];
  destinoEditado: Destinos;
  destino: Destinos;


  ngOnInit() {
    this.s.getDestinos().subscribe(
      items => {
        this.destinos=items;
        console.log(this.destinos);
      }
    );
    console.log(this.destinos);
  }
  disp(){
    this.destino.available=true;
  }
  disp1(){
    this.destino.available=false;
  }
  disp2(){
    this.destinoEditado.available=true;
  }
  disp3(){
    this.destinoEditado.available=false;
  }

  deleteDestino(event, es: Destinos){
    this.clearState();
    this.s.deleteDestino(es);
  }

  editDestino(event, es: Destinos){
    this.editDesti = true;
    this.destinoEditado = es;
  }

  updateDestino(es: Destinos){
    this.s.updateDestino(es);
    this.clearState();
  }

  clearState(){
    this.editDesti = false;
    this.destinoEditado = null;
  }

}
