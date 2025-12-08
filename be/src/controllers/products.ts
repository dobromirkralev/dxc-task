import { Request, Response, NextFunction } from "express";
import { ProductsService } from "../services/products";

export default class ProductsController {
  constructor(
    private productsService: ProductsService = new ProductsService()
  ) {}

  getProductsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: "Failed to read products" });
    }
    console.log("Products Middleware executed GET");
  };

  getProductById = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;

    try {
      const product = await this.productsService.getById(productId!);
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: "Failed to read product by id" });
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productUpdated = await this.productsService.update(
        req.params.id!,
        req.body
      );
      res.json(productUpdated);
    } catch (err) {
      res.status(500).json({ error: "Failed to update product by id" });
    }
  };
}
