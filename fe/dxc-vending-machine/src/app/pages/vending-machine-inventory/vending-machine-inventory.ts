import { Component, signal } from '@angular/core';
import { IVendingItem } from '../../../models/vending-item.model';
import { items } from '../../../dummy-data/vending-items';
import { VendingMachine } from '../../components/vending-machine/vending-machine';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-vending-machine-inventory',
  imports: [VendingMachine, SearchBar],
  templateUrl: './vending-machine-inventory.html',
  styleUrl: './vending-machine-inventory.scss',
})
export class VendingMachineInventory {
  items = signal<IVendingItem[]>(items.vending_products);
}
