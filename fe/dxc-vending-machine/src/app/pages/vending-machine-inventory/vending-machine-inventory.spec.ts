import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingMachineInventory } from './vending-machine-inventory';

describe('VendingMachineInventory', () => {
  let component: VendingMachineInventory;
  let fixture: ComponentFixture<VendingMachineInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendingMachineInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingMachineInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
