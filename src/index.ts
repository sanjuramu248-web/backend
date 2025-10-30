import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./db";
import { seedData } from "./utils/seedData";

dotenv.config()

const mongoUri = process.env.MONGO_URI;

connectDB(mongoUri!)
    .then(async () => {
        await seedData();

        app.listen(process.env.PORT, () => {
            console.log("server is running on port", process.env.PORT)
        })
    })
    .catch((err: any) => {
        console.log("server failed to run", err)
    })
