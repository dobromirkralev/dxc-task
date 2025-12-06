import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendingItem } from '../vending-item/vending-item';
import { IVendingItem } from '../../../models/vending-item.model';

@Component({
  selector: 'app-vending-items-grid',
  imports: [CommonModule, VendingItem],
  templateUrl: './vending-items-grid.html',
  styleUrl: './vending-items-grid.scss',
})
export class VendingItemsGrid {
  @Input() items: IVendingItem[] = [];
  constructor() {}
}
