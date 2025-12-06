import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendingItem } from '../../../models/vending-item.model';

@Injectable({
  providedIn: 'root',
})
export class VendingItemsService {
  constructor(private http: HttpClient) {}

  private url = './assets/data/vending-items.json';

  getItems() {
    return this.http.get<IVendingItem[]>(this.url);
  }
}
