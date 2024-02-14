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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsService.filteredProducts.subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      }
    );
  }
}
