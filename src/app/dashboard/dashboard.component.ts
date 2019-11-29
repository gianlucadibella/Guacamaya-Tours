import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Orden } from 'src/models/orden';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private s: ServicioService) { }
  ordenes: Orden[];
  ngOnInit() {
    this.s.getOrden().subscribe(
      items=> {
        this.ordenes=items;
        console.log(this.ordenes);
      }
    )
  }

}
