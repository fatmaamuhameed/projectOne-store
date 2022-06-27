import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<any> = [];
  total:number = 0;
  constructor(private productService:ProductService , private router:Router) { }

  checkoutForm: any = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(null, [Validators.required , Validators.minLength(3)]),
    creditCard : new FormControl(null , [Validators.required , Validators.maxLength(16) , Validators.minLength(16)])
  })

  ngOnInit(): void {

    if(localStorage.getItem("cartFatma")){
      this.cart = JSON.parse(localStorage.getItem("cartFatma") || '')
      for(let i = 0 ; i<this.cart.length ; i++){
        this.total += this.cart[i].item.price * this.cart[i].counter 
      }
      
    }
   
    
  }

  checkout(checkoutFormData:any){
    checkoutFormData.value['total'] = this.total
    this.productService.setUserInfo(checkoutFormData.value);
    localStorage.setItem("cartFatma" , "")
    this.router.navigate(['/confirmation']);
  }
  changeValue($event:any , item:any){
    if($event == 0){
      alert("this item removed");
      const newArr = this.cart.filter(object => {
        return object != item;
      });
      this.cart = newArr;
    }
    else{
      item.counter = Number($event);
      this.total = 0
    }
    
    for(let i = 0 ; i<this.cart.length ; i++){
      this.total += this.cart[i].item.price * this.cart[i].counter 
    }
    localStorage.setItem("cartFatma" , JSON.stringify(this.cart))

  }
}
