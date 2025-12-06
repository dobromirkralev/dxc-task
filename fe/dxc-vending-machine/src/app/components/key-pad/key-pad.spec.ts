import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPad } from './key-pad';

describe('KeyPad', () => {
  let component: KeyPad;
  let fixture: ComponentFixture<KeyPad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyPad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
