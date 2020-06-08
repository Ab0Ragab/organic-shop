import { Product } from "./product";
import { ShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: {[productTitle: string]: ShoppingCartItem}){
        this.itemsMap = itemsMap || {};

        for(let productTitle in itemsMap) {
            let item = itemsMap[productTitle];
            this.items.push(new ShoppingCartItem({ ...item, title: productTitle})); //map to shopping cart item
        }
    }

    get totalPrice(){
        let sum = 0;
        for (let productTitle in this.items){
            sum += this.items[productTitle].totalItemPrice;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for(let productTitle in this.itemsMap)
            count += this.itemsMap[productTitle].quantity;
        return count;
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.title];
        return item ? item.quantity : 0;
    }
}