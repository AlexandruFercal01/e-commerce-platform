import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';

@Component({
  selector: 'app-added-product-card',
  templateUrl: './added-product-card.component.html',
  styleUrl: './added-product-card.component.css',
})
export class AddedProductCardComponent {
  @Input() product!: ProductModel;
}
