import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import * as CartActions from './cart.actions';
import { merge, of } from 'rxjs';
import { PaymentService } from '../../services/paymet/payment-service';

@Injectable({ providedIn: 'root' })
export class CartEffects {
  checkoutCart$;
  clearCartError$;

  constructor(private actions$: Actions, private payments: PaymentService) {
    this.checkoutCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CartActions.checkoutCart),
        mergeMap(({ cartInfo, total, payment }) =>
          this.payments.executePayment(total, payment).pipe(
            map((res: any) => {
              if (res['error']) {
                return CartActions.checkoutCartFailure({
                  error: res['message'],
                });
              } else {
                return CartActions.checkoutCartSuccess(res);
              }
            }),
            catchError((error: Error) =>
              of(CartActions.checkoutCartFailure({ error: error.message }))
            )
          )
        )
      )
    );

    this.clearCartError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CartActions.clearCartResponseWithDelay),
        mergeMap(({ timeout }) =>
          merge(
            of(CartActions.clearCartError()).pipe(delay(timeout)),
            of(CartActions.clearCartSucces()).pipe(delay(timeout))
          )
        )
      )
    );
  }
}
