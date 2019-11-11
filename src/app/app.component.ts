import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'Guacamaya-Tours';
  admin: boolean;

  constructor(private ser: ServicioService) {
    this.ser.getAdmin().subscribe(value => {console.log(value);
                                            this.admin = value;
    });
  }



}
