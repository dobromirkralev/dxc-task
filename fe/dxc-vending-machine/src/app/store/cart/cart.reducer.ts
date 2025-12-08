import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface CartState {
  items: { productId: string; quantity: number }[];
  totalPrice: number;
  visible?: boolean;
  paymentSuccess: boolean | null;
  paymentError: {
    paymentInfo: string;
  } | null;
  paymentChange: {
    total: number;
    payment: number;
    change: number;
    changeBreakdown: {
      value: number;
      count: number;
    }[];
  } | null;
}
export const initialState: CartState = {
  items: [],
  totalPrice: 0,
  visible: false,
  paymentSuccess: null,
  paymentError: null,
  paymentChange: null,
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
  })),
  on(CartActions.checkoutCartSuccess, (state, paymentChange) => ({
    ...state,
    paymentSuccess: true,
    paymentChange,
  })),
  on(CartActions.checkoutCartFailure, (state, { error }) => ({
    ...state,
    paymentSuccess: false,
    paymentError: {
      paymentInfo: error,
    },
  })),
  on(CartActions.clearCartError, (state) => ({
    ...state,
    paymentError: null,
  })),
  on(CartActions.clearCartSucces, (state) => ({
    ...state,
    paymentSuccess: null,
  })),
  on(CartActions.clearCartPaymentChange, (state) => ({
    ...state,
    paymentChange: null,
  }))
);
