"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const experinceModel_1 = require("../models/experinceModel");
const promoModel_1 = require("../models/promoModel");
const db_1 = require("../db");
const seedData = async () => {
    try {
        if (mongoose_1.default.connection.readyState !== 1) {
            const mongoUri = process.env.MONGO_URI;
            if (!mongoUri) {
                throw new Error("MONGO_URI environment variable is required");
            }
            await (0, db_1.connectDB)(mongoUri);
        }
        const experienceCount = await experinceModel_1.Experience.countDocuments();
        const promoCount = await promoModel_1.Promo.countDocuments();
        if (experienceCount > 0 && promoCount > 0) {
            console.log("Sample data already exists, skipping seeding");
            return;
        }
        // Always clear and reseed for testing
        console.log("Clearing existing data...");
        await experinceModel_1.Experience.deleteMany({});
        await promoModel_1.Promo.deleteMany({});
        console.log("Data cleared successfully");
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
                imageUrl: "https://www.southernliving.com/thmb/lgkHle7FJE3vnDlLAYl-VU-mbH0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1468908187-79e55dbe8078404b83d076e0fa5fcccf.jpg",
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
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 1); // 1 year from now
        const promos = [
            {
                code: "SAVE10",
                discountType: "percentage",
                amount: 10,
                expiresAt: futureDate,
                isActive: true,
            },
            {
                code: "FLAT100",
                discountType: "flat",
                amount: 100,
                expiresAt: futureDate,
                isActive: true,
            },
        ];
        await experinceModel_1.Experience.insertMany(experiences);
        await promoModel_1.Promo.insertMany(promos);
        console.log("Sample data seeded successfully");
        console.log(`Seeded ${experiences.length} experiences and ${promos.length} promo codes`);
    }
    catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};
exports.seedData = seedData;
// Execute seeding when this file is run directly
if (require.main === module) {
    (0, exports.seedData)().then(() => {
        console.log("Seeding completed successfully");
        process.exit(0);
    }).catch((error) => {
        console.error("Seeding failed:", error);
        process.exit(1);
    });
}
//# sourceMappingURL=seedData.js.map