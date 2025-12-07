import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCartIemsDetailed,
  selectCartTotalPrice,
} from '../../store/cart/cart.selectors';
import { IVendingItem } from '../../../models/vending-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  cartItems: { product: IVendingItem; quantity: number; subtotal: number }[] =
    [];
  total: number = 0;
  constructor(private store: Store, private router: Router) {
    this.store.select(selectCartIemsDetailed).subscribe((items) => {
      this.cartItems = items;
    });

    this.store.select(selectCartTotalPrice).subscribe((pr) => {
      this.total = pr;
    });
  }

  backToShop() {
    this.router.navigate(['/inventory']);
  }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }
}
