import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }
}
