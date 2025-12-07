import { Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectProductsLoading,
} from '../../store/products/products.selectors';
import { loadProducts } from '../../store/products/products.actions';

import { IVendingItem } from '../../../models/vending-item.model';
import { VendingMachine } from '../../components/vending-machine/vending-machine';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-vending-machine-inventory',
  imports: [VendingMachine, SearchBar, AsyncPipe, CommonModule],
  templateUrl: './vending-machine-inventory.html',
  styleUrl: './vending-machine-inventory.scss',
})
export class VendingMachineInventory implements OnInit {
  products$: Observable<IVendingItem[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
    this.loading$ = this.store.select(selectProductsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
