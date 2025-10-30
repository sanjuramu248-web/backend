import { Request, Response } from "express";
import { Promo } from "../models/promoModel";

export const validatePromo = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;

    const promo = await Promo.findOne({
      code: code.toUpperCase(),
      isActive: true,
      expiresAt: { $gt: new Date() }
    });

    if (!promo) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired promo code",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        code: promo.code,
        discountType: promo.discountType,
        amount: promo.amount,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to validate promo code",
      error: error.message,
    });
  }
};