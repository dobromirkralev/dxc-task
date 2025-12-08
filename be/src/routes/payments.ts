import express from "express";
import PaymentsController from "../controllers/payments";

const router = express.Router();

const controller = () => new PaymentsController();

router.post("", (req, res, next) =>
  controller().calculatePayment(req, res, next)
);

export default router;
