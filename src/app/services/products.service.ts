import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';
import { getDoc } from 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productos:EventEmitter<number> = new EventEmitter();
  db = firebase.firestore();
  constructor(
    private firestore: AngularFirestore) {

     }

  getProducts(): Observable<any> {
    return this.firestore.collection('products', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  getProduct(id: string): Observable<any> {
    return this.firestore.collection('products').doc(id).snapshotChanges();
  }

  addProduct(product:any): Promise<any>{
    console.log(product)
    return this.firestore.collection('products').add(product)
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
