import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/products.model';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',

  styleUrl: './add-edit-form.component.css',
})
export class AddEditFormComponent {
  @Input() isEdit: boolean = false;
  @Input() product: ProductModel | undefined;
  @ViewChild('form', { static: false }) form!: NgForm;

  constructor(
    private productsService: ProductsService,
    private dialogService: DialogService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.form.setValue({
        title: this.dialogService.product?.title,
        description: this.dialogService.product?.description,
        image: this.dialogService.product?.image,
        price: this.dialogService.product?.price,
        quantity: this.dialogService.product?.quantity,
        category: this.dialogService.product?.category,
        sale: this.dialogService.product?.sale || 0,
      });
    });
  }

  onSubmit() {
    const product = new ProductModel(
      this.form.value.title,
      this.form.value.description,
      this.form.value.image,
      this.form.value.price,
      this.form.value.quantity,
      this.form.value.category,
      [],
      false,
      this.form.value.sale
    );
    if (this.form.valid) {
      if (this.dialogService.isEdit) {
        this.productsService.patchProduct(product);
        this.dialogService.isEdit = false;
      } else {
        this.productsService.postProduct(product);
      }
      this.form.reset();
    }
    // this.productsService.products.map((product) => {
    //   this.productsService.postProduct(product);
    // });
  }
}
