import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItemCount } from '../../store/cart/cart.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-chip',
  imports: [AsyncPipe],
  templateUrl: './cart-chip.html',
  styleUrl: './cart-chip.scss',
})
export class CartChip {
  itemCount$: Observable<number> | undefined;
  constructor(private store: Store) {
    this.itemCount$ = this.store.select(selectCartItemCount);
  }
  onToggleCart() {
    this.store.dispatch({ type: '[Cart] Toggle Cart' });
  }
}
