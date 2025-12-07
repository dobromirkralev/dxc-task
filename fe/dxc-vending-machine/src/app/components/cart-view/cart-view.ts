import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCartIemsDetailed,
  selectCartItems,
} from '../../store/cart/cart.selectors';
import { IVendingItem } from '../../../models/vending-item.model';
import { CartViewItem } from '../cart-view-item/cart-view-item';
import { clearCart } from '../../store/cart/cart.actions';
import { restoreProductQuantity } from '../../store/products/products.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule, CartViewItem],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.scss',
})
export class CartView {
  @Output() close = new EventEmitter<void>();
  cartItems: any[] = [];
  constructor(private store: Store, private router: Router) {
    this.store.select(selectCartIemsDetailed).subscribe((items) => {
      this.cartItems = items;
    });
  }

  onClose() {
    this.close.emit();
  }

  clearCart() {
    this.cartItems.forEach((i) => {
      this.store.dispatch(
        restoreProductQuantity({
          productId: i.product.id,
          quantity: i.quantity,
        })
      );
    });
    this.store.dispatch(clearCart());
  }

  checkOut() {
    this.close.emit();
    this.router.navigate(['/checkout']);
  }
}
