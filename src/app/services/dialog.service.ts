import { Injectable } from '@angular/core';
import { ProductModel } from '../models/products.model';

@Injectable()
export class DialogService {
  product: ProductModel | undefined;
  isEdit: boolean = false;

  constructor() {}
}
