import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VendingItemsService } from '../../services/vending-items/vending-items';
import * as ProductsActions from './products.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IVendingItem } from '../../../models/vending-item.model';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  loadProducts$;

  constructor(
    private actions$: Actions,
    private vendingItems: VendingItemsService
  ) {
    this.loadProducts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductsActions.loadProducts),
        mergeMap(() =>
          this.vendingItems.getItems().pipe(
            map((products: IVendingItem[]) =>
              ProductsActions.loadProductsSuccess({ products })
            ),
            catchError((error) =>
              of(ProductsActions.loadProductsFailure({ error }))
            )
          )
        )
      )
    );
  }
}
