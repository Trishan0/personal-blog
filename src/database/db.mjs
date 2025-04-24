import {APP_CONFIG} from "../config/index.mjs";
import mongoose from "mongoose"

export const connectToDB = async ()=>{
    try {
        await mongoose.connect(APP_CONFIG.MONGODB_URI)
        console.log("MongoDB connected")
    } catch (e) {
        console.error("MongoDB connection error: ",e)
        process.exit(1)
    }
}