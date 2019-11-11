import { TipoDeHabitacion } from './hotels';

export class Orden {

nombreCliente: string;
cedula: number;
correo: string;
telefono: number;
direccion: string;
estatus: boolean;
localizador: number;
itinerario: Itinerario;


}

export class Itinerario {

localizador: number;
hotelId: number;
fechaLLegada: number;
fechaSalida: number;
tipoHabitacion: TipoDeHabitacion[];
costoTotal: number;
integrantes: Integrantes [];

}

export class Integrantes {

nombre: string;
apellido: string;
cedula: number;
edad: number;

}
