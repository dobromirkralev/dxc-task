import { Request, Response, NextFunction } from "express";
import { PaymentsService, ERROR_MSGS } from "../services/payments";

export default class PaymentsController {
  constructor(
    private paymentsService: PaymentsService = new PaymentsService()
  ) {}

  calculatePayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { total, payment } = req.body;
    try {
      const result = await this.paymentsService.calculatePayment(
        total,
        payment
      );
      res.json(result);
    } catch (err: any) {
      if (Object.values(ERROR_MSGS).indexOf(err["message"]) !== -1) {
        res.json({
          error: true,
          message: err["message"],
        });
        return;
      }
      res.status(500).json({ error: "Failed to calculate payment" });
    }
    console.log("Payments Middleware executed");
  };
}
