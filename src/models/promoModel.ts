import mongoose, { Schema, Document } from "mongoose";

export interface IPromo extends Document {
  code: string;
  discountType: "percentage" | "flat";
  amount: number;
  expiresAt: Date;
  isActive: boolean;
}

const PromoSchema = new Schema<IPromo>(
  {
    code: { type: String, required: true, unique: true },
    discountType: { type: String, enum: ["percentage", "flat"], required: true },
    amount: { type: Number, required: true },
    expiresAt: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Promo = mongoose.model<IPromo>("Promo", PromoSchema);
