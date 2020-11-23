import { Component, OnInit } from '@angular/core';
import {ApiService} from '../.././api.service'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  productlist:any

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

 

   // this.apiService.getPeople().subscribe(list=>{   
    //   this.productlist=list
    //   console.log(this.productlist)

}
