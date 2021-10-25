import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {
 orders: any;
 load: boolean = true;
 panelOpenState:boolean = false;
  constructor(private _OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  async getAllOrders() {
    this._OrdersService.getOrders().subscribe(data => {
      this.orders = [];
       data.forEach((element: any) => {
         this.orders.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
       })
     })
     this.load = false;
   });
 }

}
