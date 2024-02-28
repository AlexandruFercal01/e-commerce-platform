import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartCount = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.cartCount.subscribe((count) => (this.cartCount = count));
  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  checkIfAdmin() {
    if (localStorage.getItem('admin') == 'true') {
      return true;
    } else {
      return false;
    }
  }
}
