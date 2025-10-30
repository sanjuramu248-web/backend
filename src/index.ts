import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./db";
import { seedData } from "./utils/seedData";

dotenv.config()

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;

connectDB(mongoUri!)
    .then(async () => {
        await seedData();

        app.listen(port, () => {
            console.log("server is running on port", port)
        })
    })
    .catch((err: any) => {
        console.log("server failed to run", err)
    })
