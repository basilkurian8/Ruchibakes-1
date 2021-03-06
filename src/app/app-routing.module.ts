import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import {ProductdisplayComponent} from './productdisplay/productdisplay.component'
import {IngredientsComponent} from './ingredients/ingredients.component'

const routes: Routes = [
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:"productlist",
    component:ProductdisplayComponent
  },
  {
    path:"ingredients",
    component:IngredientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
