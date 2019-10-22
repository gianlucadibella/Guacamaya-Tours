import { Ciudades } from 'src/models/ciudades';
import { Destinos } from 'src/models/destino';

export class Estado {

id: string;
nombre: string;
ciudad: Ciudades;
destinos: Destinos[];
imagen: string[];

}

