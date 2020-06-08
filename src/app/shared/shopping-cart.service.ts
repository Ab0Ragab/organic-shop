import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './product';
import { Observable } from 'rxjs/observable';
import { ShoppingCart } from './shopping-cart';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  quantity:number;

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges()
    .pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));
  } 

  async addToCart(product: Product){
    this.updateItem(product, 1);
   }
 
   async removeFromCart(product: Product) {
    this.updateItem(product, -1);
   }

  async removeItem(item: Product) {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items/' + item.title).remove();
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items/').remove();
  }

  private createId() { 
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> { 
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId; 

    let result = await this.createId();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItem(cartId: string, productTitle: string){
     return this.db.object('/shopping-carts/' +  cartId + '/items/' + productTitle);
  }

 
  
  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.title);
   item$.snapshotChanges().pipe(take(1)).subscribe(item => {

    if (item.payload.exists()) {
      let quantity = item.payload.exportVal().quantity + change;
      if (quantity === 0) item$.remove();
      else
        item$.update({title: product.title,
          price: product.price,
          imgUrl: product.imgUrl,
          quantity: quantity
      });
    } else {
      item$.set({title: product.title,
        price: product.price,
        imgUrl: product.imgUrl,
        quantity: 1});
    }
   })
  }
}
