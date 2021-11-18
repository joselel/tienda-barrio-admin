import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ProductsBestSellersComponent } from './products-best-sellers/products-best-sellers.component';
import { SalesMonthlyComponent } from './sales-monthly/sales-monthly.component';


@NgModule({
  declarations: [
    ReportComponent,
    ProductsBestSellersComponent,
    SalesMonthlyComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgApexchartsModule
  ]
})
export class ReportModule { }
