import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { ShoppingCart } from '../shared/shopping-cart';
import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  
 products: Product[] = [];
 filterdProducts: Product[] = [];
 category: string;
 cart$: Observable<ShoppingCart>;

  constructor( private product: ProductService,
               private activateRoute: ActivatedRoute,
               private sCartService: ShoppingCartService) {}

 async ngOnInit() {
    this.cart$ = await this.sCartService.getCart();
    this.populateProducts();
   // console.log(this.cart$);
  }

  private populateProducts(){
    this.product.getData().valueChanges().subscribe(p => {
      this.products = p;

     this.activateRoute.queryParamMap.subscribe(params => {
     this.category = params.get('category');
     this.applyFilter();
   });
  });
  }

  private applyFilter(){
    this.filterdProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : this.products;
  }

}
