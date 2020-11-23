import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { FiltersComponent } from './productdisplay/filters/filters.component';
import { ListComponent } from './productdisplay/list/list.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ItemsComponent } from './productdisplay/list/items/items.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    FiltersComponent,
    ListComponent,
    ProductdisplayComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
