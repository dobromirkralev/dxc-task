import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../store/cart/cart.actions';
import { IVendingItem } from '../../../models/vending-item.model';
import { restoreProductQuantity } from '../../store/products/products.actions';

@Component({
  selector: 'app-cart-view-item',
  imports: [],
  templateUrl: './cart-view-item.html',
  styleUrl: './cart-view-item.scss',
})
export class CartViewItem {
  @Input() item!: { product: IVendingItem; quantity: number; subtotal: number };
  constructor(private store: Store) {}
  removeItem() {
    this.store.dispatch(removeFromCart({ productId: this.item.product.id }));
    this.store.dispatch(
      restoreProductQuantity({
        productId: this.item.product.id,
        quantity: this.item.quantity,
      })
    );
  }
}
