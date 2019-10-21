import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  estados: { id: number, name: string, destinos: Array<string>, servicios: Array<string>, imagenes: Array<string> }[] = [
    { id: 0, name: 'Amazonas', destinos: ['', ''], servicios: ['', ''], imagenes: ['', ''] },
];
  actualstate: string = this.estados[0].name;
  constructor() { }

  ngOnInit() {
  }

}
