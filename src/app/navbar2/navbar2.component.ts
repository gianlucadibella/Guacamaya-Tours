import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  constructor(private ser: AdminService) { }

  ngOnInit() {
  }

  cambiar(){
    this.ser.cambiar(false);
  }
}
