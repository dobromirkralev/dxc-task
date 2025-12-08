import { Request, Response, NextFunction, Router } from "express";
import express from "express";
import productsRoutes from "./products";
import paymentRoutes from "./payments";
const router = Router();

router.use("/products", productsRoutes);
router.use("/payments", paymentRoutes);

router.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

export default router;
