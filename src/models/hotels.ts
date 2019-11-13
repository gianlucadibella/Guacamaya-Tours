export class Hotels {

id?: string;
nombre?: string;
estrellas: number;
latitud: string;
longitud: string;
direccion: string;
estado: string;
fotos: string;
servicios: string;
info: string;
available: boolean;
gugulmaps: string;
}

export class TipoDeHabitacion {
id?: string;
hotel: string;
nombre: string;
fotos: string ;
maximoDePersonas: number;
info: string;
comodidades: string;
available: boolean;
cantidad: number;
precio: number;
}
