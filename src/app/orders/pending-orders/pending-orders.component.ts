import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  orders: any;
  load: boolean = true;
  panelOpenState:boolean = false;

  constructor(private _OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrdersPending();
  }

  async getOrdersPending() {
    this._OrdersService.getOrdersPending().subscribe(data => {
      this.orders = [];
       data.forEach((element: any) => {
         this.orders.push({
         id: element.payload.doc.id,
         ...element.payload.doc.data()
       })
     })
     this._OrdersService.ordenes.emit(this.orders.length);
     this.load = false;
   });
  }

  async UpdateStateOrder(id:any, estado:string){
    await this._OrdersService
              .UpdateStateOrder(id,estado)
              .then(function(){
                Swal.fire({
                  icon: 'success',
                  title: 'El pedido se marco como ' + estado,
                  showConfirmButton: false,
                  timer: 2000
                })
              })
              .catch(function(error) {
                Swal.fire({
                  icon: 'error',
                  title: 'Ocurrio un error: ' + error.message,
                  showConfirmButton: false,
                  timer: 2000
                })
              })
  }
}
