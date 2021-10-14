import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../home/error404/error404.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent,
    children:[
    {
      path: 'inicio',
      loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'ordenes',
      loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
    },
    {
      path: 'ventas',
      loadChildren: () => import('../sales/sales.module').then(m => m.SalesModule)
    },
    {
      path: 'inventario',
      loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
    },
    {
      path: 'usuarios',
      loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'error-404',
      component: Error404Component
    }
  ]
  },
  {
    path: '**', redirectTo: 'error-404', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
