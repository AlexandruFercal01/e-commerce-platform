import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: ProductModel;
}
