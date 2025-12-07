import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';
import { selectAllProducts } from '../products/products.selectors';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectIsCartOpen = createSelector(
  selectCartState,
  (state: CartState) => state.visible || false
);

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartItemCount = createSelector(
  selectCartState,
  (state: CartState) =>
    state.items.reduce((count, item) => count + item.quantity, 0)
);
export const selectCartIemsDetailed = createSelector(
  selectCartState,
  selectAllProducts,
  (cartState, products) => {
    return cartState.items.map((item) => {
      const product = products.find((p) => p.id === item.productId)!;
      return {
        product,
        quantity: item.quantity,
        subtotal: product.price_lev * item.quantity,
      };
    });
  }
);
export const selectCartTotalPrice = createSelector(
  selectCartIemsDetailed,
  (items) => items.reduce((sum, item) => sum + item.subtotal, 0)
);
