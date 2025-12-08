export const ERROR_MSGS = {
  INVALID_PURCHACE: "Invalid Purchace",
  INSUFFICIEN_PAYMENT: "Insufficient Payment",
  INVALID_PAYMENT: "Invalid Payment",
};

export type Denomination = {
  value: number;
  count: number;
};

export type PaymentResult = {
  total: number;
  payment: number;
  change: number;
  changeBreakdown: Denomination[];
};

export class PaymentsService {
  constructor() {}

  bgDenominaitons = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  async calculatePayment(total: number, payment: number) {
    if (total === 0) {
      throw new Error(ERROR_MSGS.INVALID_PURCHACE);
    }
    if (payment === 0 || total > payment) {
      throw new Error(ERROR_MSGS.INSUFFICIEN_PAYMENT);
    }
    if (payment < 0) {
      throw new Error(ERROR_MSGS.INVALID_PAYMENT);
    }

    const change = +(payment - total).toFixed(2);
    const changeBreakdown: Denomination[] = [];
    let remaining = change;

    for (const denom of this.bgDenominaitons) {
      const count = Math.floor(remaining / denom);
      if (count > 0) {
        changeBreakdown.push({ value: denom, count });
        remaining = +(remaining - count * denom).toFixed(2);
      }
    }

    return await {
      total,
      payment,
      change,
      changeBreakdown,
    };
  }
}
