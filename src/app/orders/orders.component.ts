import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  title = 'Ordenes';
  navLinks: any[];
  activeLinkIndex = -1;
  cantidad:number = 0;
  cantidad_text:string = "+99";

    constructor(
      private router: Router,
      public _ordersService: OrdersService)
      {
        this.navLinks = [
            {
              label: 'Ordenes pendientes',
              link: '/dashboard/ordenes/ordenes-pendientes',
              index: 0
            },
            {
              label: 'Ordenes Preparadas',
              link: '/dashboard/ordenes/ordenes-preparadas',
              index: 1
            },
            {
              label: 'Ordenes canceladas',
              link: '/dashboard/ordenes/ordenes-canceladas',
              index: 2
            },
            {
              label: 'Historial de Ordenes',
              link: '/dashboard/ordenes/historial-ordenes',
              index: 3
            }
        ];
      }

  ngOnInit(): void
  {
    this._ordersService.ordenes.subscribe(cantidad =>{
      this.cantidad = cantidad;
    });
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
