import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'',component: ProductsComponent},
  {path:'nuevo-producto',component:CreateProductComponent},
  {path:'ver-producto',component:ViewProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
