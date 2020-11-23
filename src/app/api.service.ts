import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Cntdata} from './cntdata'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subdata } from './subdata';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getProductsLTH(): Observable<Cntdata[]> {
    console.log('getProductsLTH '+this.baseURL + 'products')
    return this.http.get<Cntdata[]>(this.baseURL + 'products?sort=1')
  }

  getProductsHTL(): Observable<Cntdata[]> {
    console.log('getProductsHTL '+this.baseURL + 'products')
    return this.http.get<Cntdata[]>(this.baseURL + 'products?sort=-1')
  }

  getAboutus(): Observable<Cntdata[]> {
    console.log('getAboutus '+this.baseURL + 'aboutus')
    return this.http.get<Cntdata[]>(this.baseURL + 'aboutus')
  }

  getIngredients(): Observable<Cntdata[]> {
    console.log('getIngredients '+this.baseURL + 'ingredients')
    return this.http.get<Cntdata[]>(this.baseURL + 'ingredients')
  }

  getContactus(): Observable<Cntdata[]> {
    console.log('getContactus '+this.baseURL + 'contactus')
    return this.http.get<Cntdata[]>(this.baseURL + 'contactus')
  }
 
 
  addCntdata(Cntdata:Cntdata): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Cntdata);
    console.log(body)
    return this.http.post(this.baseURL + 'contactus', body,{'headers':headers})
  }

  addSubdata(Subdata:Subdata): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Subdata);
    console.log(body)
    return this.http.post(this.baseURL + 'subscribe', body,{'headers':headers})
  }
 
}