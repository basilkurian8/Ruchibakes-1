import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Subdata} from '../../subdata'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  data=new Subdata
  aboutdata:any

  constructor(private apiService:ApiService) {
    this.apiService.getAboutus().subscribe(list=>{   
      this.aboutdata=list
      console.log(this.aboutdata)
    
      })


   }

  ngOnInit(): void {
  }

  addSub(){
    this.apiService.addSubdata(this.data).subscribe((response:any) =>{
      console.log(response)
      this.data.email=''
  })

  }

}
