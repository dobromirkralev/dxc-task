import { TestBed } from '@angular/core/testing';

import { VendingItemsService } from './vending-items';

describe('VendingItems', () => {
  let service: VendingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
