export class Hotels {

id?: string;
nombre?: string;
estrellas: number;
latitud: string;
longitud: string;
direccion: string;
estado: string;
fotos: string;
wifi: boolean;
fullday: boolean;
transporte: boolean;
piscina: boolean;
gimnasio: boolean;
animales: boolean;
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
aire: boolean;
tv: boolean;
nevera: boolean;
jacuzzi: boolean;
available: boolean;
cantidad: number;
cantidadM: number;
precio: number;
}
