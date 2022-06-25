import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) {}
  userData:any;
  getAllProducts():Observable<any>{
    return this.HttpClient.get("../assets/data.json")
  }

  setUserInfo(userData:any){
    this.userData = userData
  }

  getUserInfo(){
    return this.userData
  }
  
  
}
