import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) {}
  userData:any;
  getAllProducts():Observable<product[]>{
    return this.HttpClient.get<product[]>("../assets/data.json")
  }

  setUserInfo(userData:any){
    this.userData = userData
  }

  getUserInfo(){
    return this.userData
  }
  
  
}
