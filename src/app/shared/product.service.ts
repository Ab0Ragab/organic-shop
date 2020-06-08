import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from './product';


@Injectable()
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.productList = this.firebase.list('products')
    return this.productList
  }

  get(productTitle: string){
    return this.firebase.object('/products/' + productTitle);
  }

  insertProduct(productList){
     return this.firebase.list('products').push(productList);
  }

  updateProduct(productList) {
    this.productList.update(productList.title, {
      title: productList.title,
      price: productList.price,
      category: productList.category,
      imgUrl: productList.imgUrl
    })
  }
  deleteProduct(title: string) {
    this.productList.remove(title);
  }

}
