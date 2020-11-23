import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingdata:any

  constructor(private apiService:ApiService) {
    this.apiService.getIngredients().subscribe(list=>{   
      this.ingdata=list
      console.log(this.ingdata)
     
      })
   }

  ngOnInit(): void {
 
  }

}
