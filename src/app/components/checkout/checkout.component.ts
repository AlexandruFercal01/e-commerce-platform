import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  isCard: boolean = false;
  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('addressForm') addressForm!: NgForm;
  @ViewChild('paymentForm') paymentForm!: NgForm;
  total: number = this.cartService.total;

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private cartService: CartService
  ) {}

  onSubmit() {
    const data = {
      ...this.contactForm.value,
      ...this.addressForm.value,
      ...this.paymentForm.value,
      total: this.total,
    };

    this.checkoutService.postCheckoutData(data);
    this.router.navigate(['/home']);
  }
}
