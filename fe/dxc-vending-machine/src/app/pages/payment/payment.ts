import { CommonModule, Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  selectCartIemsDetailed,
  selectCartPaymentChange,
  selectCartPaymentError,
  selectCartPaymentSuccess,
  selectCartTotalPrice,
} from '../../store/cart/cart.selectors';
import { Store } from '@ngrx/store';
import { IVendingItem } from '../../../models/vending-item.model';
import {
  checkoutCart,
  clearCart,
  clearCartPaymentChange,
  clearCartResponseWithDelay,
} from '../../store/cart/cart.actions';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment implements OnDestroy {
  total = 0;

  destroyed$ = new Subject<void>();

  paymentSuccess: boolean | null = false;
  paymentChange: {
    total: number;
    payment: number;
    change: number;
    changeBreakdown: {
      value: number;
      count: number;
    }[];
  } | null = null;
  paymentError: {
    paymentInfo: string;
  } | null = null;

  cartItems: { product: IVendingItem; quantity: number; subtotal: number }[] =
    [];

  constructor(
    private store: Store,
    private location: Location,
    private router: Router
  ) {
    this.store
      .select(selectCartIemsDetailed)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((items) => {
        this.cartItems = items;
      });

    this.store
      .select(selectCartTotalPrice)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((pr) => {
        this.total = pr;
      });

    this.store
      .select(selectCartPaymentSuccess)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((ps) => {
        this.paymentSuccess = ps;
        this.paymentAmount = 0;
        if (this.paymentSuccess) {
          this.store.dispatch(clearCart());
        }
        this.store.dispatch(clearCartResponseWithDelay({ timeout: 5000 }));
      });

    this.store
      .select(selectCartPaymentChange)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((paymentChange) => {
        this.paymentChange = paymentChange;
        setTimeout(() => {
          this.store.dispatch(clearCartPaymentChange());
        }, 60000);
      });

    this.store
      .select(selectCartPaymentError)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((pe) => {
        this.paymentError = pe;
        this.store.dispatch(clearCartResponseWithDelay({ timeout: 5000 }));
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  paymentAmount = 0;
  paymentOptions = [
    {
      quantity: 1,
      currency: 'lv',
    },
    {
      quantity: 2,
      currency: 'lv',
    },
    {
      quantity: 5,
      currency: 'lv',
    },
    {
      quantity: 10,
      currency: 'lv',
    },
    {
      quantity: 20,
      currency: 'lv',
    },
    {
      quantity: 50,
      currency: 'lv',
    },
    {
      quantity: 1,
      currency: 'st',
    },
    {
      quantity: 2,
      currency: 'st',
    },
    {
      quantity: 5,
      currency: 'st',
    },
    {
      quantity: 10,
      currency: 'st',
    },
    {
      quantity: 20,
      currency: 'st',
    },
    {
      quantity: 50,
      currency: 'st',
    },
  ];

  paymentBtnClick(quantity: number, currency: string) {
    if (currency === 'clear') {
      this.paymentAmount = 0;
    } else if (currency === 'lv') {
      this.paymentAmount += quantity;
    } else if (currency === 'st') {
      this.paymentAmount += quantity / 100;
    }
  }

  back() {
    this.location.back();
  }

  pay() {
    this.store.dispatch(
      checkoutCart({
        cartInfo: this.cartItems.map((i) => i.product),
        total: this.total,
        payment: this.paymentAmount,
      })
    );
  }
}
