import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    NgxChartsModule
  ]
})
export class SalesModule { }
