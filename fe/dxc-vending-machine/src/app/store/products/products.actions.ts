import { createAction, props } from '@ngrx/store';
import { IVendingItem } from '../../../models/vending-item.model';

export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: IVendingItem[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Success',
  props<{ error: any }>()
);
export const buyProduct = createAction(
  '[Products] Buy Product',
  props<{ productId: string; quantity?: number }>()
);
export const buyProductSuccess = createAction(
  '[Products] Buy Product Success',
  props<{ productId: string; quantity: number }>()
);
export const buyProductFailure = createAction(
  '[Products] Buy Product Failure',
  props<{ error: any }>()
);
export const restoreProductQuantity = createAction(
  '[Products] Restore Product Quantity',
  props<{ productId: string; quantity: number }>()
);
