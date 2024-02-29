import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders: any = [];
  constructor(private ordersService: OrdersService) {
    this.ordersService.ordersSubject.subscribe((orders: any) => {
      this.orders = orders;
    });
  }

  ngOnInit() {
    this.ordersService.getOrders();
    console.log(this.orders);
  }
}
