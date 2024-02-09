import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(private router: Router) {}

  goToProduct() {
    this.router.navigate(['/products', this.product.id]);
  }
}
