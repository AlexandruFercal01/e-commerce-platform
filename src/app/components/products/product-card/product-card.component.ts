import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(private router: Router, private cartService: CartService) {}

  goToProduct() {
    this.router.navigate(['/products', this.product.id]);
  }

  createRange(end: number) {
    const stars = [];
    for (var i = 0; i < end; i++) {
      stars.push(i);
    }
    return stars;
  }

  addToCart(product: ProductModel) {
    this.cartService.addItemToCart(product);
  }

  getPrice(product: ProductModel) {
    if (!!product.sale) {
      return (product.price - (product.price * product.sale!) / 100).toFixed(2);
    } else {
      return product.price.toFixed(2);
    }
  }
}
