import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  newProducts: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.newProducts = this.productsService.getNewProducts();
  }
}
