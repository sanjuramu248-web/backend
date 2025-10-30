import mongoose from "mongoose";

export const connectDB = async(mongoUri: string) => {
    try {
        const connectionInstances = await mongoose.connect(mongoUri, {
            dbName: "highway_delite"
        })
        console.log(`db is running on host ${connectionInstances.connection.host}`)
    } catch (error: any) {
        console.log("db failed to connect", error)
        process.exit(1)
    }
}