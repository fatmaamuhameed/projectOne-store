import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path : 'product' , component:ProductListComponent},
  {path : '' , redirectTo:'/product' , pathMatch:'full'},
  {path : 'productDetails/:id' , component:ProductItemDetailComponent} , 
  {path : 'cart' , component:CartComponent},
  {path:'confirmation' , component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
