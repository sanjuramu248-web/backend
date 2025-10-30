import mongoose, { Schema, Document } from "mongoose";

export interface ISlot {
  date: string;
  time: string;
  availableSeats: number;
}

export interface IExperience extends Document {
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
  slots: ISlot[];
  createdAt: Date;
  updatedAt: Date;
}

const SlotSchema = new Schema<ISlot>({
  date: { type: String, required: true },
  time: { type: String, required: true },
  availableSeats: { type: Number, required: true, min: 0 },
});

const ExperienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    slots: { type: [SlotSchema], required: true },
  },
  { timestamps: true }
);

export const Experience = mongoose.model<IExperience>(
  "Experience",
  ExperienceSchema
);
