import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../../../services/dialog.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-admin-product-card',
  templateUrl: './admin-product-card.component.html',
  styleUrl: './admin-product-card.component.css',
})
export class AdminProductCardComponent {
  @Input() product!: ProductModel;

  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService,
    private productsService: ProductsService
  ) {}

  openEditDialog(product: ProductModel) {
    this.dialogService.product = product;
    this.dialogService.isEdit = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id);
  }
}
