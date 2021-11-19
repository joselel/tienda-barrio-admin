import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ProductsBestSellersComponent } from './products-best-sellers/products-best-sellers.component';
import { SalesMonthlyComponent } from './sales-monthly/sales-monthly.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { DateExpiryComponent } from './date-expiry/date-expiry.component';
import { ProfitProductsComponent } from './profit-products/profit-products.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    ReportComponent,
    ProductsBestSellersComponent,
    SalesMonthlyComponent,
    IncomeExpensesComponent,
    DateExpiryComponent,
    ProfitProductsComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgApexchartsModule
  ]
})
export class ReportModule { }
