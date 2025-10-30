"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePromo = void 0;
const promoModel_1 = require("../models/promoModel");
const validatePromo = async (req, res) => {
    try {
        const { code } = req.body;
        const promo = await promoModel_1.Promo.findOne({
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to validate promo code",
            error: error.message,
        });
    }
};
exports.validatePromo = validatePromo;
//# sourceMappingURL=promoController.js.map