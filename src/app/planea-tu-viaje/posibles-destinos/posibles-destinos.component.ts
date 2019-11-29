import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Destinos } from 'src/models/destino';

@Component({
  selector: 'app-posibles-destinos',
  templateUrl: './posibles-destinos.component.html',
  styleUrls: ['./posibles-destinos.component.scss']
})
export class PosiblesDestinosComponent implements OnInit {

destinos: Destinos [] ;

  constructor(public ar: ActivatedRoute, private service: ServicioService, private s: ServiciosService, public router: Router) { }

  ngOnInit() {

    this.service.getDestinos().subscribe( items => {

      this.destinos = items.filter( e => e.tipoDeDestino === this.ar.snapshot.queryParams.name );
      console.log(this.destinos);

    }
  );

  }

  checkDestinoDetails(itemName: string) {

    this.router.navigate(['/detalle-hoteles'], {queryParams: { name: itemName}});

  }


}
