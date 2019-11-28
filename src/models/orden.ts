import { TipoDeHabitacion } from './hotels';

export class Orden {

id?: string;
nombreCliente: string;
cedula: number;
correo: string;
telefono: number;
direccion: string;
itinerario?: Itinerario[];


}

export class Itinerario {

fecha: Date[];
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
