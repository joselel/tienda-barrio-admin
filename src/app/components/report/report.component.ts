import { Component, OnInit } from '@angular/core';
import { ProductsBestSellersComponent } from './products-best-sellers/products-best-sellers.component';
import { SalesMonthlyComponent } from './sales-monthly/sales-monthly.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { DateExpiryComponent } from './date-expiry/date-expiry.component';
import { ProfitProductsComponent } from './profit-products/profit-products.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
