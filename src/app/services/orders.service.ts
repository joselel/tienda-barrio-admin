import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordenes:EventEmitter<number> = new EventEmitter();
  db = firebase.firestore();
  constructor(
    private firestore: AngularFirestore) {

     }

  getOrders(): Observable<any> {
    return this.firestore.collection('orders', ref => ref.orderBy('FechaInicio', 'desc')).snapshotChanges();
  }

  getOrder(id: string): Observable<any> {
    return this.firestore.collection('orders').doc(id).snapshotChanges();
  }

  getOrdersPending(): Observable<any> {
    return this.firestore.collection('orders', ref => ref.orderBy('FechaInicio', 'desc').where('estado','==','Recibido')).snapshotChanges();
  }

  getOrdersCancel(): Observable<any> {
    return this.firestore.collection('orders', ref => ref.orderBy('FechaInicio', 'desc').where('estado','==','Cancelado')).snapshotChanges();
  }

  getOrdersPrepared(): Observable<any> {
    return this.firestore.collection('orders', ref => ref.orderBy('FechaInicio', 'desc').where('estado','==','Preparado')).snapshotChanges();
  }

  UpdateStateOrder(id:any, estado:string){
    return firebase.firestore().collection("orders").doc(id).update({estado: estado});
  }

}
