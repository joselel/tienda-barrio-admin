import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanceledOrdersComponent } from './canceled-orders/canceled-orders.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { OrdersComponent } from './orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { PrepareOrdersComponent } from './prepare-orders/prepare-orders.component';

const routes: Routes = [
  {
    path:'', component:OrdersComponent,
    children:
    [
        {
          path:'', component: PendingOrdersComponent
        },
        {
          path:'detalle-orden', component: DetailOrderComponent
        },
        {
          path:'ordenes-pendientes', component: PendingOrdersComponent
        },
        {
          path:'ordenes-canceladas', component: CanceledOrdersComponent
        },
        {
          path:'historial-ordenes', component: OrdersHistoryComponent
        },
        {
          path:'ordenes-preparadas', component: PrepareOrdersComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
