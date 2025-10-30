import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  userName: string;
  email: string;
  experienceId: mongoose.Types.ObjectId;
  date: string;
  time: string;
  totalPrice: number;
  promoCode?: string;
  status: "confirmed" | "failed";
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    experienceId: {
      type: Schema.Types.ObjectId,
      ref: "Experience",
      required: true,
    },
    date: { type: String, required: true },
    time: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    promoCode: { type: String },
    status: { type: String, enum: ["confirmed", "failed"], default: "confirmed" },
  },
  { timestamps: true }
);

BookingSchema.index({ experienceId: 1, date: 1, time: 1, email: 1 }, { unique: true });

export const Booking = mongoose.model<IBooking>("Booking", BookingSchema);
