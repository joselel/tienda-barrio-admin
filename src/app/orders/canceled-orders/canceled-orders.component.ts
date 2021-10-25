import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-canceled-orders',
  templateUrl: './canceled-orders.component.html',
  styleUrls: ['./canceled-orders.component.css']
})
export class CanceledOrdersComponent implements OnInit {
  orders: any;
  load: boolean = true;
  panelOpenState:boolean = false;

  constructor(private _OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrdersCancel();
  }

  async getOrdersCancel() {
    this._OrdersService.getOrdersCancel().subscribe(data => {
      this.orders = [];
       data.forEach((element: any) => {
         this.orders.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
       })
     })
     console.log(this.orders)
     this.load = false;
   });
  }

}
