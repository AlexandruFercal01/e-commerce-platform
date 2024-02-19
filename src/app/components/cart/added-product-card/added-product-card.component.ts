import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-added-product-card',
  templateUrl: './added-product-card.component.html',
  styleUrl: './added-product-card.component.css',
})
export class AddedProductCardComponent {
  @Input() product!: ProductModel;

  constructor(private cartService: CartService) {}

  onDelete(product: ProductModel) {
    product.quantity += this.product.quantity;
    this.cartService.deleteItemFromCart(product);
  }

  increaseQuantityOfProduct(product: ProductModel) {
    this.cartService.increaseQuantityOfProduct(product);
  }

  decreaseQuantityOfProduct(product: ProductModel) {
    this.cartService.decreaseQuantityOfProduct(product);
  }
}
