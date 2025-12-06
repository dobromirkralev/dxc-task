import { Component, signal } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { items } from '../../../dummy-data/vending-items';
import { VendingMachine } from '../../components/vending-machine/vending-machine';
import { IVendingItem } from '../../../models/vending-item.model';
import { CartView } from '../../components/cart-view/cart-view';
@Component({
  selector: 'app-home',
  imports: [NavBar, VendingMachine, CartView],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  items = signal<IVendingItem[]>(items.vending_products);
  cartOpen = true;
  constructor() {}
}
