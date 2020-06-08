import { Product } from './product';

export class ShoppingCartItem {

    product: Product;
    title: string;
    price: number;
    category: string;
    imgUrl: string;
    quantity: number;

  constructor(param?: Partial<ShoppingCartItem>) {
    Object.assign(this, param);
  }

  get totalItemPrice() {
    return this.quantity * this.price;
  }
}
