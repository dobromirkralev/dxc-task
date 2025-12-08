import { Product } from "../models/entities/product";
import { ProductRepository } from "../models/repository/product/product";
import { ProductFilesystemRepository } from "../models/repository/product/product.filesystem";

export class ProductsService {
  ERROR_MSGS = {};
  constructor(
    private productRepository: ProductRepository = new ProductFilesystemRepository()
  ) {}

  async getById(id: string): Promise<Product | null> {
    return await this.productRepository.getById(id);
  }

  async getAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }

  async update(
    productId: string,
    updateProduct: Partial<Product>
  ): Promise<Product | null> {
    return await this.productRepository.update(productId, updateProduct);
  }
}
