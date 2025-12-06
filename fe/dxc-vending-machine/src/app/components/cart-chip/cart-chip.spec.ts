import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartChip } from './cart-chip';

describe('CartChip', () => {
  let component: CartChip;
  let fixture: ComponentFixture<CartChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartChip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
