import { Component, OnInit } from '@angular/core';
import {S1Service} from '../../../s1.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  productlist:any

  constructor(private service:S1Service) { }

  ngOnInit(): void {
    this.service.getData().subscribe(list=>{   
      this.productlist=list
      console.log(this.productlist)
  })
}

}
