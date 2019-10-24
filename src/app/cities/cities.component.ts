import { Component, OnInit } from '@angular/core';
import { TipoDeHabitacion } from 'src/models/hotels';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {


  estados = [{
    nombre: 'Apure',
    id: '2',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    info: 'Apure es un lugar muy de pinga que queda en venezuela, se los recomiendo de verdad esta bien chido --Luisito Comunica',
    hoteles: [{
      nombre: 'Hotel Punta Arena',
      imagen: 'assets/images/hoteles/DSCI6787.JPG',
      info: 'En este hotel te puedes quedar a dormir y usar la piscina pero no tienen wifi',
      estrellas: 5,
      latitud: '7.0855555',
      longitud: '70.7605486',
      direccion: 'Hotel Punta Arena, Cl. 20 #2370, Arauca, Colombia ',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    }, {
      nombre: 'Best Western Hotel Soleos',
      imagen: 'assets/images/hoteles/3304_best_western_hotel_soleos_4215.jpg',
      info: 'Este hotel esta en apure tambien, tiene sus habitaciones y baño y esas cosas',
      estrellas: 3,
      latitud: '7.8633675',
      longitud: '-67.4960039',
      direccion: 'Avenida Intercomunal Los Centauros, San Fernando de Apure. Estado Apure. San Fernando de Apure. Apure      ',
      disponible: true,
      precio: 400,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    }, {
      nombre: 'Hotel Acuario',
      imagen: 'assets/images/hoteles/2816_hotel_restaurant_luncheria_acuario_4125.jpg',
      info: 'este hotel tiene un acuario con muchos peces adentro',
      estrellas: 2,
      latitud: '-67.4730955',
      longitud: '7.8933482',
      direccion: 'between street Ricaurter and street Arevalo Gonzalez, Calle Bolivar, San Fernando de Apure, Apure de carloss',
      disponible: false,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    } ],
  }, {
    nombre: 'Amazonas',
    id: '1',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    // tslint:disable-next-line: max-line-length
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt malesuada posuere. Sed rhoncus quis nisl quis porttitor. Pellentesque aliquet tristique feugiat. Etiam sit amet massa placerat, lacinia risus scelerisque, pulvinar ligula. Phasellus ut pharetra purus, quis cursus augue. Fusce egestas nisl et lectus malesuada, ac placerat mi semper. Suspendisse at porta orci, sit amet viverra elit. Phasellus a leo rutrum leo varius laoreet.' ,
    hoteles : [{
      nombre: 'canaimita',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    }, {
      nombre: 'churuata',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    }, {
      nombre: 'piso',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        },
        {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
    } ]

  }, {
    nombre: 'Caracas',
    id: '3',
    imagen: 'assets/images/nature/Paraguas-paseo-san-jacinto002-1200x800.jpg',
    // tslint:disable-next-line: max-line-length
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt malesuada posuere. Sed rhoncus quis nisl quis porttitor. Pellentesque aliquet tristique feugiat. Etiam sit amet massa placerat, lacinia risus scelerisque, pulvinar ligula. Phasellus ut pharetra purus, quis cursus augue. Fusce egestas nisl et lectus malesuada, ac placerat mi semper. Suspendisse at porta orci, sit amet viverra elit. Phasellus a leo rutrum leo varius laoreet.' ,
    hoteles : [{
      nombre: 'galipan',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/nature/los-roques.jpg',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }, {
        nombre: 'duplex',
        fotos: 'assets/images/nature/los-roques.jpg',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }, {
        nombre: 'duplex',
        fotos: 'assets/images/nature/los-roques.jpg',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
        }]
      }, {
      nombre: 'marriot',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      },
      {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      },
      {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      }]
    }, {
      nombre: 'eurobuilding',
      imagen: 'assets/images/nature/los-roques.jpg',
      info: 'blablalblallalalallaldadjqnejqnwejqneqjwnejqnwejqnwekjqnwejqnwekjqnweqqqnqjwne',
      estrellas: 5,
      latitud: 'string',
      longitud: 'string',
      direccion: 'casa de carloss',
      disponible: true,
      precio: 500,
      servicios: ['spa', 'pool', 'desayuno'],
      tipos: [{
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      },
      {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      },
      {
        nombre: 'duplex',
        fotos: 'assets/images/hoteles/DSCI6787.JPG',
        maximoDePersonas: 5,
        comodidades:  ['nevera', 'sauna']
      }]
    } ]
  } ];


  actualstate = '';
  actualstateObj = this.estados[0];
  actualhotel = '';
  actualhotelObj = this.actualstateObj.hoteles[0];
  actualhab = '';
  actualhabObj: any;

  onChange = () => {
    this.actualstateObj = this.estados.find((c) => c.nombre === this.actualstate);
    console.log(this.actualstateObj);
  }

  onChange2 = () => {
    this.actualhotelObj = this.actualstateObj.hoteles.find((c) => c.nombre === this.actualhotel);
    console.log(this.actualhotelObj);
  }

  onChange3 = () => {
    this.actualhabObj = this.actualhotelObj.tipos.find((c) => c.nombre === this.actualhab);
    console.log(this.actualhabObj);
  }




  cambiar() {
    this.actualstate = (document.getElementById('estados') as HTMLInputElement).value;
    console.log(this.actualstate);
  }

  cambiar2() {
    this.actualhotel = (document.getElementById('hss') as HTMLInputElement).value;
    console.log(this.actualstate);
  }

  cambiar3() {
    this.actualhab = (document.getElementById('hss2') as HTMLInputElement).value;
    console.log(this.actualhab);
  }


  constructor() {
  }

  ngOnInit() {
  }

}
