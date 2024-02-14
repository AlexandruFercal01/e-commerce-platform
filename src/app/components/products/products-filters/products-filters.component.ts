import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
})
export class ProductsFiltersComponent {
  panelOpenState: boolean = false;

  constructor(private productsService: ProductsService) {}

  onCategoryFilterChange(category: string) {
    return this.productsService.onFilterByCategory(category);
  }

  onPriceFilterChange(lowPrice: string, highPrice: string) {
    return this.productsService.onFilterByPrice(
      Number.parseInt(lowPrice),
      Number.parseInt(highPrice)
    );
  }

  onRatingFilterChange(rating: number) {
    return this.productsService.onFilterByRating(rating);
  }
}
