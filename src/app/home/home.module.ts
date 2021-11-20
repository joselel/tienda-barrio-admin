import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    Error404Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ],
  exports: [
    Error404Component
  ]
})
export class HomeModule { }
