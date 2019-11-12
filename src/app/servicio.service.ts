import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Destinos } from 'src/models/destino';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { TipoDeHabitacion } from 'src/models/hotels';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  admin = new BehaviorSubject<boolean>(false);
  ColeccionHoteles: AngularFirestoreCollection<Hotels>;
  oHotels: Observable<Hotels[]>;
  ColeccionDestinos: AngularFirestoreCollection<Destinos>;
  oDestinos: Observable<Destinos[]>;
  ColeccionEstado: AngularFirestoreCollection<Estado>;
  oEstado: Observable<Estado[]>;
  ColeccionTDH: AngularFirestoreCollection<TipoDeHabitacion>;
  oTDH: Observable<TipoDeHabitacion[]>;
  constructor(private afs: AngularFirestore) {

  }

  getHotels() {
    return this.oHotels;
  }

  getDestinos() {
    return this.oDestinos;
  }
  getEstado() {
    return this.oEstado;
  }
  getTDH() {
    return this.oTDH;
  }
  getAdmin() {
    return this.admin.asObservable();
  }
  cambiar(newValue: boolean): void {
    this.admin.next(newValue);
}

}
