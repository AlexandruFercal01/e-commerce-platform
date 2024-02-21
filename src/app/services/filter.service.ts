import { Injectable } from '@angular/core';
import { FilterCriteria } from '../models/filter-criteria';
import { Subject } from 'rxjs';

@Injectable()
export class FilterService {
  filterCriteria: FilterCriteria = {};
  filter = new Subject<FilterCriteria>();

  updateFilterCriteria(filterCriteria: FilterCriteria) {
    this.filterCriteria = {
      ...this.filterCriteria,
      ...filterCriteria,
    };
    this.filter.next(this.filterCriteria);
  }

  onRemoveFilters() {
    this.filterCriteria = {};
    this.filter.next(this.filterCriteria);
  }
}
