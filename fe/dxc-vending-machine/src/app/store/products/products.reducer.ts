import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { IVendingItem } from '../../../models/vending-item.model';

export interface ProductsState {
  products: IVendingItem[];
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductsActions.buyProduct, (state, { productId, quantity = 1 }) => {
    const items = state.products.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - quantity };
      }
      return item;
    });
    return { ...state, products: items, loading: false };
  }),
  on(ProductsActions.buyProductSuccess, (state, { productId, quantity }) => ({
    ...state,
    loading: false,
  })),
  on(ProductsActions.buyProductFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    ProductsActions.restoreProductQuantity,
    (state, { productId, quantity = 1 }) => {
      const items = state.products.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      return { ...state, products: items, loading: false };
    }
  )
);
