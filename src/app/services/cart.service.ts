import { Injectable } from '@angular/core';
import { ProductModel } from '../models/products.model';

@Injectable()
export class CartService {
  cartItems: ProductModel[] = [];

  getItems(): ProductModel[] {
    return this.cartItems;
  }

  addItemToCart(product: ProductModel) {
    this.cartItems.push(product);
    console.log(this.cartItems);
  }
}
