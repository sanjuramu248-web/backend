"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const BookingModel_1 = require("../models/BookingModel");
const experinceModel_1 = require("../models/experinceModel");
const createBooking = async (req, res) => {
    try {
        const { userName, email, experienceId, date, time, totalPrice, promoCode } = req.body;
        // Check if experience exists
        const experience = await experinceModel_1.Experience.findById(experienceId);
        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found",
            });
        }
        // Check slot availability
        const slot = experience.slots.find(s => s.date === date && s.time === time);
        if (!slot || slot.availableSeats <= 0) {
            return res.status(400).json({
                success: false,
                message: "Slot not available",
            });
        }
        // Create booking
        const booking = new BookingModel_1.Booking({
            userName,
            email,
            experienceId,
            date,
            time,
            totalPrice,
            promoCode,
            status: "confirmed",
        });
        await booking.save();
        // Update slot availability
        slot.availableSeats -= 1;
        await experience.save();
        res.status(201).json({
            success: true,
            message: "Booking confirmed",
            data: booking,
        });
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "You have already booked this slot",
            });
        }
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
            error: error.message,
        });
    }
};
exports.createBooking = createBooking;
//# sourceMappingURL=bookingController.js.map