import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VendingItemsService } from '../../services/vending-items/vending-items';
import * as ProductsActions from './products.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IVendingItem } from '../../../models/vending-item.model';
import { Store } from '@ngrx/store';
import { selectProductById } from './products.selectors';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  loadProducts$;
  upadteProductQuantity$;

  constructor(
    private actions$: Actions,
    private store: Store,
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

    this.upadteProductQuantity$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(
            ProductsActions.buyProduct,
            ProductsActions.restoreProductQuantity
          ),
          mergeMap((action) => {
            const { productId, quantity } = action;
            let restoreQuantity = false;
            if (action.type === ProductsActions.restoreProductQuantity.type) {
              restoreQuantity = true;
            }
            return this.store.select(selectProductById(productId)).pipe(
              map((product) => ({
                product,
                productId,
                quantity,
                restoreQuantity,
              }))
            );
          }),
          switchMap(({ product, productId, quantity, restoreQuantity }) => {
            return this.vendingItems.update(
              productId,
              product as Partial<IVendingItem>
            );
          })
        ),
      { dispatch: false }
    );
  }
}
