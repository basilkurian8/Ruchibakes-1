import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import {Cntdata} from '../../cntdata'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  data= new Cntdata()
  cntdata:any

  constructor(private apiService:ApiService) { 
    this.apiService.getContactus().subscribe(list=>{   
      this.cntdata=list
      console.log(this.cntdata)
    
      })
  }

  ngOnInit(): void {
  }

  addData(){
    console.log(JSON.stringify(this.data))
    
    // this.apiService.getPeople().subscribe((response:any) =>{
    //   console.log(response)
    this.apiService.addCntdata(this.data).subscribe((response:any) =>{
        console.log(response)
        this.data.name=''
        this.data.email=''
        this.data.message=''
        
        
        
    })

  }

}
