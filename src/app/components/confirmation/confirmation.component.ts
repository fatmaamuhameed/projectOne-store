import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userInfo:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.userInfo = this.productService.getUserInfo();    
  }

}
