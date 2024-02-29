import { Inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheckoutService {
  constructor(private http: HttpClient, private cartService: CartService) {}

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
    this.http
      .post(
        'https://e-commerce-22682-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        data
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
