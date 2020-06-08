import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../shared/product';
import { ShoppingCart } from '../shared/shopping-cart';
import { ShoppingCartService } from '../shared/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './producr-card.component.html',
  styleUrls: ['./producr-card.component.css']
})
export class ProducrCardComponent implements OnChanges {
@Input('product') product:Product;
@Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnChanges(){
    if(this.shoppingCart) {
      if(this.shoppingCart.getQuantity(this.product) === 0){
        this.cartService.removeItem(this.product);
      }
    }
  }
}
