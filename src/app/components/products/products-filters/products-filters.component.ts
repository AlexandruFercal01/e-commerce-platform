import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
})
export class ProductsFiltersComponent {
  panelOpenState: boolean = false;
}
