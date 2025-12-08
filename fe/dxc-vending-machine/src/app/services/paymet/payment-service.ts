import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendingItem } from '../../../models/vending-item.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = 'http://localhost:3000/payments';

  executePayment(total: number, payment: number) {
    return this.http.post(`${this.API_URL}`, {
      total,
      payment,
    });
  }
}
