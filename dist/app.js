"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const experienceRoutes_1 = __importDefault(require("./routes/experienceRoutes"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const cors_1 = __importDefault(require("cors"));
const promoRoutes_1 = __importDefault(require("./routes/promoRoutes"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: true,
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json({ limit: "16kb" }));
app.use(express_1.default.urlencoded({ limit: "16kb", extended: true }));
// Routes
app.use("/api/experiences", experienceRoutes_1.default);
app.use("/api/bookings", bookingRoutes_1.default);
app.use("/api/promo", promoRoutes_1.default);
//# sourceMappingURL=app.js.map