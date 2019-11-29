import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/models/destino';
import { Estado } from 'src/models/estado';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-editar2',
  templateUrl: './editar2.component.html',
  styleUrls: ['./editar2.component.scss']
})
export class Editar2Component implements OnInit {

  constructor(private s: ServicioService) { }

  editDesti: boolean = false;
  addDest = false;
  destinos: Destinos[];
  estados: Estado[];
  destinoEditado: Destinos;
  destino = {
    nombre:  '',
    descripcion: '',
    info: '',
    tipoDeDestino: '',
    imagen: '',
    estado: '',
    deportes: false,
    cultura: false,
    frio: false,
    aventura: false,
    nocturno: false,
    direccion: '',
    linkGoogleMaps: '',
    available: true,
  };


  ngOnInit() {

    this.s.getEstado().subscribe(
      items=> {
        this.estados = items;
        console.log(this.estados);
      }
    )

    this.s.getDestinos().subscribe(
      items => {
        this.destinos=items;
        console.log(this.destinos);
      }
    );
    console.log(this.destinos);

  }

  onSubmit(){
    if(this.destino.nombre != '' && this.destino.info != ''){

      this.s.addDestino(this.destino);
      this.destino.nombre = '';
      this.destino.descripcion = '',
      this.destino.info= '',
      this.destino.tipoDeDestino= '',
      this.destino.imagen= '',
      this.destino.deportes = false;
      this.destino.cultura = false;
      this.destino.frio = false;
      this.destino.aventura = false;
      this.destino.nocturno = false;
      this.destino.estado= '',
      this.destino.direccion= '',
      this.destino.linkGoogleMaps= '',
      this.destino.available= true

    }
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

  sport(){
  this.destino.deportes = true;
  }
  sport2(){
    this.destino.deportes = false;
  }
  sport3(){
    this.destinoEditado.deportes = true;
  }
  sport4(){
    this.destinoEditado.deportes = false;
  }

  cult(){
    this.destino.cultura = true;
  }
  cult2(){
    this.destino.cultura = false;
  }
  cult3(){
    this.destinoEditado.cultura = true;
  }
  cult4(){
    this.destinoEditado.cultura = false;
  }

  frio(){
    this.destino.frio = true;
  }
  frio2(){
    this.destino.frio = false;
  }
  frio3(){
    this.destinoEditado.frio = true;
  }
  frio4(){
    this.destinoEditado.frio = false;
  }

  av(){
    this.destino.aventura = true;
  }
  av2(){
    this.destino.aventura =false;
  }
  av3(){
    this.destinoEditado.aventura = true;
  }
  av4(){
    this.destinoEditado.aventura = false;
  }

  noche(){
    this.destino.nocturno = true;
  }
  noche2(){
    this.destino.nocturno = false;
  }
  noche3(){
    this.destinoEditado.nocturno = true;
  }
  noche4(){
    this.destinoEditado.nocturno = false;
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

  addiDest(){
    this.addDest = true;
  }

  cerrar(){
    this.addDest = false;
  }

}
