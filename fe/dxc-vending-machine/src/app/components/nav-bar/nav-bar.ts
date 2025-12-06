import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartChip } from '../cart-chip/cart-chip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, CartChip, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  cartOpen = false;
}
