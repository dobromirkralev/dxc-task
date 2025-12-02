export interface IVendingItem {
  name: string;
  vendor: string;
  price_lev: number;
  price_eur: number;
  quantity: number;
  good_until: string;
  category: string;
  ingredients: string;
  allergens: string[];
  calories_kcal: number;
  item_picture_id: string;
}
