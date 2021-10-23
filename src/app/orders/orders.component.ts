import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  title = 'Ordenes';
  navLinks: any[];
  activeLinkIndex = -1;
    constructor(private router: Router) {
      this.navLinks = [
          {
              label: 'Ordenes pendientes',
              link: '/dashboard/ordenes/ordenes-pendientes',
              index: 0
          },
          {
            label: 'Ordenes canceladas',
            link: '/dashboard/ordenes/ordenes-canceladas',
            index: 2
          },
          {
              label: 'Historial de Ordenes',
              link: '/dashboard/ordenes/historial-ordenes',
              index: 1
          },
      ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
