import { Component } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: ProductModel[] = [];

  constructor(private cartService: CartService) {
    this.cartService.items.subscribe((items) => {
      this.cartItems = items;
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }
}
