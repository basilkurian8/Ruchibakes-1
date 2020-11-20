import { Component, OnInit } from '@angular/core';
import {S1Service} from '../../s1.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productlist:any

  constructor(private service:S1Service) { }

  ngOnInit(): void {
    this.service.getData().subscribe(list=>{   
      this.productlist=list
      
  })
  
  }

}
