import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-prepare-orders',
  templateUrl: './prepare-orders.component.html',
  styleUrls: ['./prepare-orders.component.css']
})
export class PrepareOrdersComponent implements OnInit {
  orders: any;
  load: boolean = true;
  panelOpenState:boolean = false;

  constructor(private _OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrdersPrepared();
  }

  async getOrdersPrepared() {
    this._OrdersService.getOrdersPrepared().subscribe(data => {
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

  async UpdateStateOrder(id:any, estado:string){
    await this._OrdersService
              .UpdateStateOrder(id,estado)
              .then(function(){
                Swal.fire({
                  icon: 'success',
                  title: 'El estado del pedido cambio ' + estado,
                  showConfirmButton: false,
                  timer: 1500
                })
              })
              .catch(function(error) {
                Swal.fire({
                  icon: 'error',
                  title: error.message,
                  showConfirmButton: false,
                  timer: 1500
                })
              })
  }

}
