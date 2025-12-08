import { createAction, props } from '@ngrx/store';
import { IVendingItem } from '../../../models/vending-item.model';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ productId: string; quantity: number }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);
export const toggleCart = createAction('[Cart] Toggle Cart');
export const clearCart = createAction('[Cart] Clear Cart');
export const updateCartItemQuantity = createAction(
  '[Cart] Update Cart Item Quantity',
  props<{ productId: string; quantity: number }>()
);
export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cartItems: { productId: string; quantity: number }[] }>()
);
export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);
export const checkoutCart = createAction(
  '[Cart] Checkout Cart',
  props<{ cartInfo: IVendingItem[]; total: number; payment: number }>()
);
export const checkoutCartSuccess = createAction(
  '[Cart] Checkout Cart Success',
  props<{
    total: number;
    payment: number;
    change: number;
    changeBreakdown: {
      value: number;
      count: number;
    }[];
  }>()
);
export const clearCartPaymentChange = createAction(
  '[Cart] Clear Cart Payment Change'
);
export const checkoutCartFailure = createAction(
  '[Cart] Checkout Cart Failure',
  props<{ error: any }>()
);
export const clearCartError = createAction('[Cart] Clear Cart Error');

export const clearCartSucces = createAction('[Cart] Clear Cart Success');
export const clearCartResponseWithDelay = createAction(
  '[Cart] Clear Cart Response With Delay',
  props<{ timeout: number }>()
);
