import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewItem } from './cart-view-item';

describe('CartViewItem', () => {
  let component: CartViewItem;
  let fixture: ComponentFixture<CartViewItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartViewItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartViewItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
