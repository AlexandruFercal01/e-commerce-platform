import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable()
export class OrdersService {
  orders: any = [];
  ordersSubject = new Subject();

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http
      .get(
        'https://e-commerce-22682-default-rtdb.europe-west1.firebasedatabase.app/orders.json'
      )
      .pipe(
        map((data) => {
          const products: any = [];
          Object.entries(data).forEach(([key, value]) => {
            if (data.hasOwnProperty(key)) {
              console.log(key);
              console.log(value);
              products.push({ ...value, id: key });
            }
          });

          return products;
        })
      )
      .subscribe((data) => {
        this.orders = data;
        this.ordersSubject.next(this.orders);
      });
  }
}
