import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { FiltersComponent } from './productdisplay/filters/filters.component';
import { ListComponent } from './productdisplay/list/list.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ItemsComponent } from './productdisplay/list/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    FiltersComponent,
    ListComponent,
    ProductdisplayComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
