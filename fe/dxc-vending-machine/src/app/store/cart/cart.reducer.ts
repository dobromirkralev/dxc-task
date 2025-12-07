import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface CartState {
  items: { productId: string; quantity: number }[];
  totalPrice: number;
  visible?: boolean;
}
export const initialState: CartState = {
  items: [],
  totalPrice: 0,
  visible: false,
};
export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { productId, quantity = 1 }) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.productId === productId
    );
    let updatedItems = [...state.items];
    if (existingItemIndex !== -1) {
      const existingItem = updatedItems[existingItemIndex];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
    } else {
      updatedItems.push({ productId, quantity });
    }
    return { ...state, items: updatedItems };
  }),
  on(CartActions.removeFromCart, (state, { productId }) => {
    const updatedItems = state.items.filter(
      (item) => item.productId !== productId
    );
    return { ...state, items: updatedItems };
  }),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
    totalPrice: 0,
  })),
  on(CartActions.toggleCart, (state) => ({
    ...state,
    visible: !state.visible,
  }))
);
