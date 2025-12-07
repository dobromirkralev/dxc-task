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

// router.post("", (req, res, next) =>
//   controller().craeteConsultant(req, res, next)
// );

// router.put("/:id", (req, res, next) =>
//   controller().updateConsultant(req, res, next)
// );

// router.delete("/:id", (req, res, next) =>
//   controller().deleteConsultant(req, res, next)
// );
export default router;
