import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:4200/assets/prdtmp.json")
  }
}
