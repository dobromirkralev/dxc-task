import { promises as fs } from "fs";
import path from "path";
import { Product } from "../../entities/product";
import { ProductRepository } from "../product/product";

export class ProductFilesystemRepository implements ProductRepository {
  private filePath = path.join(__dirname, "vending-items.json");

  private async readFile(): Promise<Product[]> {
    const data = await fs.readFile(this.filePath, "utf-8");
    return JSON.parse(data) as Product[];
  }

  private async writeFile(products: Product[]): Promise<void> {
    const data = JSON.stringify(products, null, 2);
    await fs.writeFile(this.filePath, data, "utf-8");
  }

  async getById(id: string): Promise<Product | null> {
    const products = await this.readFile();
    return products.find((product) => product.id === id) || null;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.readFile();
    return products;
  }

  async create(product: Product): Promise<Product> {
    const products = await this.readFile();
    products.push(product);
    await this.writeFile(products);
    return product;
  }

  async updateQuantity(
    id: string,
    productQuantityInfo: { productId: string; quantity: number },
    restore: boolean
  ): Promise<boolean> {
    const products = await this.readFile();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return false;
    } else {
      if (products[index]) {
        if (!restore) {
          products[index].quantity -= productQuantityInfo.quantity;
        } else {
          products[index].quantity += productQuantityInfo.quantity;
        }
        await this.writeFile(products);
        return true;
      }
      return false;
    }
  }

  async update(id: string, product: Partial<Product>): Promise<Product | null> {
    const products = await this.readFile();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...(product as Product) };
    await this.writeFile(products);
    return products[index];
  }

  async delete(id: string): Promise<boolean> {
    const products = await this.readFile();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    await this.writeFile(products);
    return true;
  }
}
