import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Destinos } from 'src/models/destino';
import { Hotels } from 'src/models/hotels';
import { Estado } from 'src/models/estado';
import { TipoDeHabitacion } from 'src/models/hotels';
import { Orden } from 'src/models/orden';
import { BehaviorSubject } from 'rxjs';
import { Reference } from '@angular/compiler/src/render3/r3_ast';




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
  ColeccionOrdenes: AngularFirestoreCollection<Orden>;
  oOrdenes: Observable<Orden[]>;
  OrdenDoc: AngularFirestoreDocument<Orden>;


  constructor(private afs: AngularFirestore) {

    this.ColeccionEstado = this.afs.collection('estados', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionHoteles = this.afs.collection('Hoteles', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionDestinos = this.afs.collection('destinos', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionTDH = this.afs.collection('Habitaciones', ref => ref.orderBy('nombre', 'asc'));
    this.ColeccionOrdenes = this.afs.collection('Ordenes');

}

  getHotels() {
    return this.ColeccionHoteles.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hotels;
        data.id = a.payload.doc.id;
        return data;
      }); }));
  }

  getDestinos() {
    return this.ColeccionDestinos.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Destinos;
        data.id = a.payload.doc.id;
        return data;
      }); }));
  }

  getEstado() {
    return this.ColeccionEstado.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Estado;
        data.id = a.payload.doc.id;
        return data;
      }); }));
  }

  getOrden() {
    return this.ColeccionOrdenes.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Orden;
        data.id = a.payload.doc.id;
        return data;
      }); }));
  }

  getDEstado(){
    return this.EstadosDoc;
  }

  getTDH() {
    return this.ColeccionTDH.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TipoDeHabitacion;
        data.id = a.payload.doc.id;
        return data;
      }); }));
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

  addOrden(es: Orden){
    this.ColeccionOrdenes.add(es);
  }




}
