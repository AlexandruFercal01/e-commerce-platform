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
import { FormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';

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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [
    provideAnimationsAsync(),
    ProductsService,
    CartService,
    FilterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
