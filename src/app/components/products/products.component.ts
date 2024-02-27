import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  isLoading: boolean = false;

  constructor(private productsService: ProductsService) {
    this.productsService.filteredProducts.subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      }
    );
  }

  ngOnInit() {
    this.isLoading = true;
    this.productsService.getProducts().subscribe((data) => {
      this.products = Object.values(data) as ProductModel[];

      this.productsService.filteredProducts.next(this.products);
      this.isLoading = false;
    });
  }
}
