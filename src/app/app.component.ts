import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'Guacamaya-Tours';
  public home = 'true';

  constructor() {
  }

  public modoA() {
    this.home = 'false';
    console.log(this.home);
  }

}
