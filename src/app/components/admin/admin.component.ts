import { Component, ViewChild } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import {
  MatDialog,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  products: ProductModel[] = [];
  isLoading: boolean = false;

  constructor(
    private productsService: ProductsService,
    private dialogService: DialogService,
    public dialog: MatDialog
  ) {
    this.productsService.filteredProducts.subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      }
    );
  }

  ngOnInit() {
    this.isLoading = true;
    this.productsService.getProducts();
    this.isLoading = false;
  }

  openDialog() {
    this.dialogService.isEdit = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
    });
  }
}
