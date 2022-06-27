import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : product[] = [];
  changeCounter : number = 0;
  options : Array<number> = [1,2,3,4,5,6,7,8,9,10];
  cart: Array<any> = [];
  count:number = 1;
  constructor(private productService:ProductService , private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("cartFatma")){
      this.cart = JSON.parse(localStorage.getItem("cartFatma") || '');
    }
    this.productService.getAllProducts().subscribe((res) => {      
      this.productList = res;            
    })
  }

  selectQuantity($event:any , id:number){
    this.changeCounter = $event.target.value;

  }

  goToProductDetails(productItem:number){
    this.router.navigate([`/productDetails/${productItem}`])
  }

  addToCart(item:any){
    let select = document.getElementById(`quantitty${item.id}`) as HTMLSelectElement
    let value = select.options[select.selectedIndex].value;

    var found = false;

    if(this.cart.length == 0){
      this.cart[0] = {item : item  , counter : Number(value)}
    }
    else{
      for(var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].item.id == item.id) {
            found = true;
            break;
        }
      }
      if(!found){
        this.cart.push({item : item  , counter : Number(value)})
      }
      else{
        this.cart[i].counter += Number(value);
      }
      
    }
   
    localStorage.setItem('cartFatma' , JSON.stringify(this.cart));
    alert("Add To cart");
  }

  addToCartMessagePerant(){
   alert("jjjjj")
    
  }
}
