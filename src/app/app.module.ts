import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersComponent } from './users/users.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginModule } from './login/login.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ProductsBestSellersComponent } from './components/report/products-best-sellers/products-best-sellers.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    LoginModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports:[
    UsersComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
