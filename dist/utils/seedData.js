"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const experinceModel_1 = require("../models/experinceModel");
const promoModel_1 = require("../models/promoModel");
const seedData = async () => {
    try {
        // Clear existing data
        await experinceModel_1.Experience.deleteMany({});
        await promoModel_1.Promo.deleteMany({});
        // Sample experiences
        const experiences = [
            {
                title: "Beach Paradise",
                description: "Relax on pristine beaches with crystal clear waters and enjoy water sports activities.",
                location: "Maldives",
                price: 299,
                imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                slots: [
                    { date: "2024-11-01", time: "10:00 AM", availableSeats: 5 },
                    { date: "2024-11-01", time: "2:00 PM", availableSeats: 3 },
                    { date: "2024-11-02", time: "10:00 AM", availableSeats: 5 },
                    { date: "2024-11-02", time: "2:00 PM", availableSeats: 4 },
                ],
            },
            {
                title: "Mountain Adventure",
                description: "Experience breathtaking mountain views and hiking trails with expert guides.",
                location: "Swiss Alps",
                price: 199,
                imageUrl: "https://images.unsplash.com/photo-1464822759844-d150f39b8b3c?w=400",
                slots: [
                    { date: "2024-11-03", time: "9:00 AM", availableSeats: 8 },
                    { date: "2024-11-03", time: "1:00 PM", availableSeats: 6 },
                    { date: "2024-11-04", time: "9:00 AM", availableSeats: 7 },
                    { date: "2024-11-04", time: "1:00 PM", availableSeats: 5 },
                ],
            },
            {
                title: "City Escape",
                description: "Discover vibrant city life and cultural experiences in the heart of the metropolis.",
                location: "New York",
                price: 149,
                imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
                slots: [
                    { date: "2024-11-05", time: "11:00 AM", availableSeats: 10 },
                    { date: "2024-11-05", time: "3:00 PM", availableSeats: 8 },
                    { date: "2024-11-06", time: "11:00 AM", availableSeats: 9 },
                    { date: "2024-11-06", time: "3:00 PM", availableSeats: 7 },
                ],
            },
            {
                title: "Desert Oasis",
                description: "Explore vast deserts and ancient cultural sites with guided tours.",
                location: "Sahara Desert",
                price: 249,
                imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                slots: [
                    { date: "2024-11-07", time: "8:00 AM", availableSeats: 6 },
                    { date: "2024-11-07", time: "12:00 PM", availableSeats: 4 },
                    { date: "2024-11-08", time: "8:00 AM", availableSeats: 5 },
                    { date: "2024-11-08", time: "12:00 PM", availableSeats: 3 },
                ],
            },
        ];
        // Sample promo codes
        const promos = [
            {
                code: "SAVE10",
                discountType: "percentage",
                amount: 10,
                expiresAt: new Date("2024-12-31"),
                isActive: true,
            },
            {
                code: "FLAT100",
                discountType: "flat",
                amount: 100,
                expiresAt: new Date("2024-12-31"),
                isActive: true,
            },
        ];
        await experinceModel_1.Experience.insertMany(experiences);
        await promoModel_1.Promo.insertMany(promos);
        console.log("Sample data seeded successfully");
    }
    catch (error) {
        console.error("Error seeding data:", error);
    }
};
exports.seedData = seedData;
//# sourceMappingURL=seedData.js.map