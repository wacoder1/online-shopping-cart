import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {TopModule} from './top/top.module';
import { AddproductsComponent } from './addproducts/addproducts.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatatableModule} from './datatable/datatable.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AddproductsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    LoginModule,
    TopModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatatableModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
