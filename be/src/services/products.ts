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

  async create(consultant: Product): Promise<Product> {
    return this.productRepository.create(consultant);
  }

  async update(
    id: string,
    consultant: Partial<Product>
  ): Promise<Product | null> {
    return await this.productRepository.update(id, consultant);
  }

  async delete(id: string): Promise<boolean> {
    return await this.productRepository.delete(id);
  }
}
