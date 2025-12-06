import { Component, Input } from '@angular/core';
import { VendingItemsGrid } from '../vending-items-grid/vending-items-grid';
import { KeyPad } from '../key-pad/key-pad';
import { IVendingItem } from '../../../models/vending-item.model';

@Component({
  selector: 'app-vending-machine',
  imports: [VendingItemsGrid],
  templateUrl: './vending-machine.html',
  styleUrl: './vending-machine.scss',
})
export class VendingMachine {
  @Input() items: IVendingItem[] = [];
}
