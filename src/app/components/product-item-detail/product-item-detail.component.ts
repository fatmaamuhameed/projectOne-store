import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  detailsProduct : any;
  cart: Array<any> = [];
  options : Array<number> = [1,2,3,4,5,6,7,8,9,10];
  @Output() addToCartMessage = new EventEmitter()
  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute) {

    if(localStorage.getItem("cartFatma")){
      this.cart = JSON.parse(localStorage.getItem("cartFatma") || '');
    }
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((response:any) => {
      this.productService.getAllProducts().subscribe((res) => {
        for(let i=0 ; i<res.length ; i++){
          if(res[i].id == response.id){
            this.detailsProduct = res[i]
          }
        }        
      })
    });
  }

  
  addToCart(item:any){
    
    let select = document.getElementById(`qnt${item.id}`) as HTMLSelectElement
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
    this.addToCartMessage.emit(alert("Add To cart"));
    //alert("Add To cart");
  }

}

