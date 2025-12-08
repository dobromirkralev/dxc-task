import { Product } from "../../entities/product";

export interface ProductRepository {
  getById(id: string): Promise<Product | null>;
  getAll(): Promise<Product[]>;
  updateQuantity(
    id: string,
    productQuantityInfo: { productId: string; quantity: number },
    restore: boolean
  ): Promise<boolean>;
  create(Product: Product): Promise<Product>;
  update(id: string, Product: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}
