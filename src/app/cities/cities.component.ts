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
    imagen: 'assets/images/hoteles/Db3KBVHXkAAgqvg (1).jpg',
    // tslint:disable-next-line: max-line-length
    info: 'El estado Apure es uno de los estados más emblemáticos de los llanos venezolanos y uno de los de mayor potencial turístico, rico en sabanas, morichales y bosques de galería que lo convierten en un espectáculo irrepetible a nuestra vista. La actividad turística del estado se desarrolla dentro del extenso y exuberante llano lo que atrae la atención de muchos, por sus innumerables parques nacionales, monumentos, entre otros.',
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
    imagen: 'assets/images/hoteles/amazon-river.png',
    // tslint:disable-next-line: max-line-length
    info: 'El estado Amazonas se encuentra situado en el sur de Venezuela, siendo sus límites el estado Bolívar por el norte; la República del Brasil; el estado Bolívar y Brasil por el este y la República de Colombia por el oeste. Su nombre se debe a su ubicación geográfica, que corresponde a la región de la Amazonía, que de una u otra forma, está integrada por la totalidad de los países sudamericanos, con la sola excepción de Chile. Podemos decir que esta extensa zona es quizás el pulmón más grande de nuestro planeta, cubierto de selvas y con altísimo índice de pluviosidad.' ,
    hoteles : [{
      nombre: 'Hotel Venetur Amazonas',
      imagen: 'assets/images/nature/hotel_amazonas_welcome.jpg',
      // tslint:disable-next-line: max-line-length
      info: 'DescripciónEl Gran Hotel Amazonas​ es un edificio histórico y protegido utilizado como centro turístico ubicado en Calle Evelio Roa, con calle amazonas en la ciudad de Puerto Ayacucho, al norte del estado de Amazonas, y en la parte meridional del país sudamericano de Venezuela.',
      estrellas: 5,
      latitud: '5.673755',
      longitud: '-67.626567',
      direccion: 'Calle Evelio Roa, Puerto Ayacucho 7101, Amazonas',
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
    imagen: 'assets/images/hoteles/La_Previsora_Torre_Domus_y_el_panorama_urbano_de_Caracas.jpg',
    // tslint:disable-next-line: max-line-length
    info: 'Caracas, la capital de Venezuela, es un centro comercial y cultural ubicado en un valle montañoso del norte. El líder de la independencia Simón Bolívar está enterrado en el Panteón Nacional de Venezuela, establecido en el siglo XIX en el casco antiguo de la ciudad. La Catedral de Caracas, un lugar emblemático de la arquitectura romanesca, data del siglo XVII. Las torres gemelas de 225 de altura en el Parque Central son el símbolo del perfil de la ciudad. ' ,
    hoteles : [{
      nombre: 'Terraza DAvila Galipan',
      imagen: 'assets/images/hoteles/HeaderPicacho@2x.jpg',
      // tslint:disable-next-line: max-line-length
      info: 'A sólo 25 minutos de Caracas, este pueblito es el escape perfecto para evadir el bullicio y el estrés que siempre hay en las grandes ciudades.',
      estrellas: 5,
      latitud: '10.557213',
      longitud: ' -66.885245',
      direccion: 'H447+VW San Antonio de Galipan, Vargas',
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
      nombre: 'Marriot',
      imagen: 'assets/images/hoteles/ccsjw-pool-0048-hor-feat.jpg',
      // tslint:disable-next-line: max-line-length
      info: 'Este lujoso hotel situado en un elegante edificio de 17 pisos en el distrito comercial se encuentra a 2 km del centro comercial Centro San Ignacio y a 4 km del parque del Este.',
      estrellas: 5,
      latitud: '10.491178',
      longitud: '-66.864331',
      direccion: ' Avenida Francisco de Miranda, Caracas 1060, Distrito Capital',
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
      nombre: 'Eurobuilding',
      imagen: 'assets/images/hoteles/eurobuilding.jpg',
      // tslint:disable-next-line: max-line-length
      info: 'Este tranquilo hotel de convenciones se encuentra en una zona comercial con vista al parque nacional El Ávila, a 3 km de la estación de metro de Chacao y a 8 km del teatro Teresa Carreño.',
      estrellas: 5,
      latitud: '10.483120',
      longitud: ' -66.850066',
      direccion: 'Calle la Guairita, Edf. Los Roques Piso 5, Caracas 1060, Miranda',
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
