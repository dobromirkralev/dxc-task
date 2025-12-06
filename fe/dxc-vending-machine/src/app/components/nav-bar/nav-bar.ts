import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../search-bar/search-bar';
import { CartChip } from '../cart-chip/cart-chip';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, SearchBar, CartChip],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  cartOpen = false;
}
