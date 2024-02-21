import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  product!: ProductModel;
  quantity = 1;
  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.product = this.productsService.getProductById(
      this.router.snapshot.params['id']
    );
  }

  createRange(end: number) {
    const stars = [];
    for (var i = 0; i < end; i++) {
      stars.push(i);
    }
    return stars;
  }

  onAddToCart(product: ProductModel) {
    product.quantity -= this.quantity;
    this.cartService.addItemToCart(product, this.quantity);
  }

  increaseQuantityOfProduct() {
    this.quantity++;
  }

  decreaseQuantityOfProduct() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getPrice(product: ProductModel) {
    if (!!product.sale) {
      return (product.price - (product.price * product.sale!) / 100).toFixed(2);
    } else {
      return product.price.toFixed(2);
    }
  }
}
