import { Component, Input, OnChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVendingItem } from '../../../models/vending-item.model';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';
import { buyProduct } from '../../store/products/products.actions';

@Component({
  selector: 'app-vending-item',
  imports: [CommonModule],
  templateUrl: './vending-item.html',
  styleUrl: './vending-item.scss',
})
export class VendingItem implements OnChanges {
  constructor(private store: Store) {}
  @Input() item: IVendingItem | null = null;
  itemQuantityAvailable = signal(this.item?.quantity ?? 0);
  boughtQuantity = signal(0);
  ngOnChanges() {
    this.itemQuantityAvailable.set(this.item?.quantity ?? 0);
  }

  decreaseBoughtQuantity() {
    if (this.boughtQuantity() > 0) {
      this.boughtQuantity.update((qty) => qty - 1);
      this.itemQuantityAvailable.update((qty) => qty + 1);
    }
  }

  increaseBoughtQuantity() {
    if (this.itemQuantityAvailable() > 0) {
      this.boughtQuantity.update((qty) => qty + 1);
      this.itemQuantityAvailable.update((qty) => qty - 1);
    }
  }

  addToCart() {
    if (this.boughtQuantity() > 0) {
      this.store.dispatch(
        buyProduct({
          productId: this.item!.id,
          quantity: this.boughtQuantity(),
        })
      );
      this.store.dispatch(
        addToCart({ productId: this.item!.id, quantity: this.boughtQuantity() })
      );
      this.boughtQuantity.set(0);
    }
  }
}
