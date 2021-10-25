import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { CanceledOrdersComponent } from './canceled-orders/canceled-orders.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { PrepareOrdersComponent } from './prepare-orders/prepare-orders.component';
@NgModule({
  declarations: [
    OrdersComponent,
    DetailOrderComponent,
    CanceledOrdersComponent,
    OrdersHistoryComponent,
    PendingOrdersComponent,
    PrepareOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class OrdersModule { }
