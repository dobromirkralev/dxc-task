import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';
import { CartView } from '../../components/cart-view/cart-view';
import { Store } from '@ngrx/store';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';

@Component({
  selector: 'app-layout',
  imports: [NavBar, RouterOutlet, CartView],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  cartOpen = false;
  constructor(private store: Store) {
    this.store.select(selectIsCartOpen).subscribe((isOpen) => {
      this.cartOpen = isOpen;
    });
  }

  closeCart() {
    this.store.dispatch({ type: '[Cart] Toggle Cart' });
  }
}
