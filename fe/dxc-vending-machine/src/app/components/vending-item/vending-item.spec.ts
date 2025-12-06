import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingItem } from './vending-item';

describe('VendingItem', () => {
  let component: VendingItem;
  let fixture: ComponentFixture<VendingItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendingItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
