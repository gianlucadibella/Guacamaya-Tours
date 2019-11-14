import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Destinos } from 'src/models/destino';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { TipoDeHabitacion } from 'src/models/hotels';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  ColeccionHoteles: AngularFirestoreCollection<Hotels>;
  oHotels: Observable<Hotels[]>;
  HDoc: AngularFirestoreDocument<Hotels>;
  ColeccionDestinos: AngularFirestoreCollection<Destinos>;
  oDestinos: Observable<Destinos[]>;
  DestDoc: AngularFirestoreDocument<Destinos>;
  ColeccionEstado: AngularFirestoreCollection<Estado>;
  oEstado: Observable<Estado[]>;
  EstadosDoc: AngularFirestoreDocument<Estado>;
  ColeccionTDH: AngularFirestoreCollection<TipoDeHabitacion>;
  oTDH: Observable<TipoDeHabitacion[]>;
  TDHDoc: AngularFirestoreDocument<Estado>;
  constructor(private afs: AngularFirestore) {

    this.ColeccionEstado = this.afs.collection('estados', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionHoteles = this.afs.collection('Hoteles', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionDestinos = this.afs.collection('destinos', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionTDH = this.afs.collection('Habitaciones', ref => ref.orderBy('nombre', 'asc'));



    this.oHotels = this.afs.collection('Hoteles').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hotels;
        data.id = a.payload.doc.id;
        return data;
      }); }));

    this.oDestinos = this.afs.collection('destinos').snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Destinos;
          data.id = a.payload.doc.id;
          return data;
        }); }));

    this.oTDH = this.afs.collection('Habitaciones').snapshotChanges().pipe(map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as TipoDeHabitacion;
            data.id = a.payload.doc.id;
            return data;
          }); }));

    this.oEstado = this.afs.collection('estados').snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Estado;
              data.id = a.payload.doc.id;
              return data;
            }); }));
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


  addEstado(es: Estado) {
    this.ColeccionEstado.add(es);
  }

  deleteEstado(es: Estado) {
    this.EstadosDoc = this.afs.doc(`estados/${es.id}`);
    this.EstadosDoc.delete();
  }

  updateEstado(es: Estado) {
    this.EstadosDoc = this.afs.doc(`estados/${es.id}`);
    this.EstadosDoc.update(es);
  }

  addDestino(es: Destinos) {
    this.ColeccionDestinos.add(es);
  }

  deleteDestino(es: Destinos) {
    this.DestDoc = this.afs.doc(`destinos/${es.id}`);
    this.DestDoc.delete();
  }

  updateDestino(es: Destinos) {
    this.DestDoc = this.afs.doc(`destinos/${es.id}`);
    this.DestDoc.update(es);
  }

  addHotel(es: Hotels){
    this.ColeccionHoteles.add(es);
  }

  deleteHotel(es: Hotels){
    this.HDoc = this.afs.doc(`Hoteles/${es.id}`);
    this.HDoc.delete();
  }

  updateHotel(es: Hotels){
    this.HDoc = this.afs.doc(`Hoteles/${es.id}`);
    this.HDoc.update(es);
  }

  addHab(es: TipoDeHabitacion){
    this.ColeccionTDH.add(es);
  }

  deleteHab(es: TipoDeHabitacion){
    this.TDHDoc= this.afs.doc(`Habitaciones/${es.id}`);
    this.TDHDoc.delete();
  }

  updateHab(es: TipoDeHabitacion){
    this.TDHDoc = this.afs.doc(`Habitaciones/${es.id}`);
    this.TDHDoc.update(es);
  } 


}
