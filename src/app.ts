import express from "express";
import cookieParser from "cookie-parser";
import experienceRoutes from "./routes/experienceRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import cors from "cors";
import promoRoutes from "./routes/promoRoutes";

const app = express();

app.use(cors({
    origin: "https://nexora-project-tipf.vercel.app/",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))

// Routes
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

export {app}
