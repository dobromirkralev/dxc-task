import express from "express";
import ProductsController from "../controllers/products";

const router = express.Router();

const controller = () => new ProductsController();

router.get("", (req, res, next) =>
  controller().getProductsList(req, res, next)
);

router.get("/:id", (req, res, next) =>
  controller().getProductById(req, res, next)
);

router.patch("/:id", (req, res, next) => controller().update(req, res, next));
export default router;
