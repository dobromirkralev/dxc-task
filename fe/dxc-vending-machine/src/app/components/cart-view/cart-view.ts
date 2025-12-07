import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCartIemsDetailed,
  selectCartItems,
} from '../../store/cart/cart.selectors';
import { IVendingItem } from '../../../models/vending-item.model';
import { CartViewItem } from '../cart-view-item/cart-view-item';

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
  constructor(private store: Store) {
    this.store.select(selectCartIemsDetailed).subscribe((items) => {
      this.cartItems = items;
    });
  }

  onClose() {
    this.close.emit();
  }
}
