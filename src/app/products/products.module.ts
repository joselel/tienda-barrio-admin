import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
