import { Component, OnInit } from '@angular/core';
import {S1Service} from '../../../s1.service'
import {ApiService} from '../../../api.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  productlist:any

  constructor(private service:S1Service,private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductsLTH().subscribe(list=>{   
      this.productlist=list
      console.log(this.productlist)
      // this.service.getData().subscribe(list =>{
      //   this.productlist=list
      //   console.log(this.productlist)
      })
  
}
sort(){
  var ft=<HTMLInputElement>document.getElementById("filter")
  // if (ft.value == 'bst'){
  //   console.log('bst')

  // }
  if (ft.value == 'plth'){
    this.apiService.getProductsLTH().subscribe(list=>{   
      this.productlist=list
      console.log(this.productlist)

  })}

  if (ft.value == 'phtl'){
    this.apiService.getProductsHTL().subscribe(list=>{   
      this.productlist=list
      console.log(this.productlist)

  })

  }
}


}
