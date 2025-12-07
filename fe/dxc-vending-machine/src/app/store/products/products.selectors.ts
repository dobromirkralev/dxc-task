import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { IVendingItem } from '../../../models/vending-item.model';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectProductById = (productId: string) =>
  createSelector(selectAllProducts, (products: IVendingItem[]) => {
    return products.find((product) => product.id === productId);
  });
