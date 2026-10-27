import dotenv from "dotenv";

// Load environment variables from .env file    
dotenv.config();

// Validate environment variables
if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
}

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

// Export environment variables
const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
};

export default config;