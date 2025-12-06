import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingItemsGrid } from './vending-items-grid';

describe('VendingItemsGrid', () => {
  let component: VendingItemsGrid;
  let fixture: ComponentFixture<VendingItemsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendingItemsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingItemsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
