import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServicioService } from './servicio.service';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'Guacamaya-Tours';
  admin: boolean = false;

  constructor(private ser: ServicioService, private s:AdminService) {
    this.s.getAdmin().subscribe(value => {console.log(value);
                                          this.admin = value;
    });
  }



}
