export class Hotels {

id: string;
nombre: string;
estrellas: number;
latitud: string;
longitud: string;
direccion: string;
estado: string;
fotos: string;
servicios: string[];
habitaciones: TipoDeHabitacion[];
available: boolean;


}

export class TipoDeHabitacion {
hotel: string;
nombre: string;
fotos: string [];
maximoDePersonas: number;
comodidades: string [];
available: boolean;
cantidad: number;
precio: number;
}
