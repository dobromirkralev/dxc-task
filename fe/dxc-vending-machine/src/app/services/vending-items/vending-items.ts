import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendingItem } from '../../../models/vending-item.model';

@Injectable({
  providedIn: 'root',
})
export class VendingItemsService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = 'http://localhost:3000/products';

  getItems() {
    return this.http.get<IVendingItem[]>(this.API_URL);
  }
}
