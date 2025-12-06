import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.scss',
})
export class CartView {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
