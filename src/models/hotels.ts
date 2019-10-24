export class Hotels {

id: string;
nombre: string;
estrellas: number;
latitud: string;
longitud: string;
direccion: string;
estado: string;
fotos: string;
ciudad: string;
disponible: boolean;
precio: number;
servicios: string[];
tipos: TipoDeHabitacion[];

}

export class TipoDeHabitacion {

nombre: string;
fotos: string [];
maximoDePersonas: number;
comodidades: string [];

}
