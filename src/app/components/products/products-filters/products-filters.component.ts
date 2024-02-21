import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FilterCriteria, SortOptions } from '../../../models/filter-criteria';
import { filter } from 'rxjs';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
})
export class ProductsFiltersComponent {
  panelOpenState: boolean = false;
  filterCriteria: FilterCriteria = {};

  constructor(
    private productsService: ProductsService,
    private filterService: FilterService
  ) {}

  onFilterUpdate(filterCriteria: FilterCriteria) {
    this.filterService.updateFilterCriteria(filterCriteria);
  }

  onRemoveFilters() {
    this.filterService.onRemoveFilters();
  }

  onSortUpdate(sortOptions: string) {
    this.productsService.onSort(sortOptions as SortOptions);
  }
}
