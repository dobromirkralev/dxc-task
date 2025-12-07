import { Request, Response, NextFunction, Router } from "express";
import express from "express";
import productsRoutes from "./products";
const router = Router();

router.use("/products", productsRoutes);

router.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

export default router;
