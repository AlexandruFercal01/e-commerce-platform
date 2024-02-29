import { Inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ProductModel } from '../models/products.model';

@Injectable()
export class CheckoutService {
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  getOrders() {
    return this.http
      .get(
        'https://e-commerce-22682-default-rtdb.europe-west1.firebasedatabase.app/orders.json'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  postCheckoutData(orderInfo: any) {
    const data = {
      ...orderInfo,
      products: this.cartService.getItems(),
    };
    data.products.forEach((product: ProductModel) => {
      this.productsService.patchProduct({
        ...product,
        quantity: this.productsService.products.find((p) => p.id === product.id)
          ?.quantity!,
      });
    });
    this.http
      .post(
        'https://e-commerce-22682-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        data
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.cartService.cartItems = [];
    this.cartService.items.next(this.cartService.cartItems);
    this.cartService.cartCount.next(this.cartService.cartItems.length);
    this.cartService.total = 0;
  }
}
