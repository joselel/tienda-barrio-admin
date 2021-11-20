import { Injectable, EventEmitter} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from '@firebase/app-compat';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  productos:EventEmitter<number> = new EventEmitter();
  db = firebase.firestore();
  
  constructor(private firestore: AngularFirestore) { }

  getProductsService(): Observable<any> {
    return this.firestore.collection('products', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  getSalesService() : Observable<any>{
    return this.firestore.collection('sales').snapshotChanges();
  }

  getOrdesDeliveredService(): Observable<any> {
    return this.firestore.collection('orders', ref => ref.where('estado','==','Entregado')).snapshotChanges();
  }

}
