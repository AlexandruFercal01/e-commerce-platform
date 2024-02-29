import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsFiltersComponent } from './components/products/products-filters/products-filters.component';
import { ProductsService } from './services/products.service';
import { CartComponent } from './components/cart/cart.component';
import { AddedProductCardComponent } from './components/cart/added-product-card/added-product-card.component';
import { CartService } from './services/cart.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ProductPageComponent } from './components/products/product-page/product-page.component';
import { ReviewCardComponent } from './components/products/review-card/review-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductCardComponent } from './components/admin/admin-product-card/admin-product-card.component';
import { AddEditFormComponent } from './components/admin/add-edit-form/add-edit-form.component';
import { DialogComponent } from './components/admin/dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from './services/dialog.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CheckoutService } from './services/checkout.service';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductsFiltersComponent,
    CartComponent,
    AddedProductCardComponent,
    ProductPageComponent,
    ReviewCardComponent,
    AdminComponent,
    AdminProductCardComponent,
    AddEditFormComponent,
    DialogComponent,
    AboutComponent,
    AuthComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatStepperModule,
    MatBadgeModule,
    MatInputModule,
    MatFormField,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    ProductsService,
    CartService,
    FilterService,
    DialogService,
    CheckoutService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
