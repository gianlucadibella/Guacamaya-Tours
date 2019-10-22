import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/models/estado';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {


  estados = [{
    nombre: 'apure',
    id: '2',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
    hoteles: [{
      nombre: 'hotelito1',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    }, {
      nombre: 'dallas suites',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    }, {
      nombre: 'aladdin',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    } ]

  }, {
    nombre: 'amazonas',
    id: '1',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
    hoteles : [{
      nombre: 'canaimita',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    }, {
      nombre: 'churuata',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    }, {
      nombre: 'piso',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
    } ]

  }, {
    nombre: 'caracas',
    id: '3',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
    hoteles : [{
    nombre: 'galipan',
    imagen: 'assets/images/nature/los-roques.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
  }, {
    nombre: 'marriot',
    imagen: 'assets/images/nature/los-roques.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
  }, {
    nombre: 'eurobuilding',
    imagen: 'assets/images/nature/los-roques.jpg',
    info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne'
  } ]
  } ];


  actualstate = '';
  actualstateObj = this.estados[0];
  actualhotel = '';
  actualhotelObj = this.actualstateObj.hoteles[0];

  onChange = () => {
    this.actualstateObj = this.estados.find((c) => c.nombre === this.actualstate);
    console.log(this.actualstateObj);
  }

  onChange2 = () => {
    this.actualhotelObj = this.actualstateObj.hoteles.find((c) => c.nombre === this.actualhotel);
    console.log(this.actualhotelObj);
  }



  cambiar() {
    this.actualstate = (document.getElementById('estados') as HTMLInputElement).value;
    console.log(this.actualstate);
  }


  constructor() {
  }

  ngOnInit() {
  }

}
