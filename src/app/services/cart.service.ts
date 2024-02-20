import { Injectable } from '@angular/core';
import { ProductModel } from '../models/products.model';
import { Subject } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable()
export class CartService {
  cartItems: ProductModel[] = [];
  items = new Subject<ProductModel[]>();
  cartCount = new Subject<number>();

  constructor(private productsService: ProductsService) {}

  getItems(): ProductModel[] {
    return this.cartItems;
  }

  addItemToCart(product: ProductModel, quantity: number) {
    if (product.quantity > 0) {
      const isInCart = this.cartItems.some((item) => item.id === product.id);
      if (isInCart) {
        this.cartItems.find((item) => item.id === product.id)!.quantity +=
          quantity;
      } else {
        this.cartItems.push({ ...product, quantity: quantity }); // Add the new product to the cart
        this.cartCount.next(this.cartItems.length); // Update the cart count
      }
    } else {
      product.available = false;
    }
    console.log(this.cartItems);
  }

  decreaseQuantityOfProduct(product: ProductModel) {
    product.quantity--;
    console.log(this.cartItems);
  }

  increaseQuantityOfProduct(product: ProductModel) {
    product.quantity++;
    console.log(this.cartItems);
  }

  deleteItemFromCart(product: ProductModel) {
    this.productsService.increaseQuantityOfProduct(
      product.id,
      this.cartItems.find((item) => item.id === product.id)!.quantity / 2
    );
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.items.next(this.cartItems);
    this.cartCount.next(this.cartItems.length);
    console.log(this.cartItems);
  }
}
