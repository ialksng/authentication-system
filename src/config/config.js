import dotenv from "dotenv";

// Load environment variables from .env file    
dotenv.config();

// Validate environment variables
if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
}

// Export environment variables
const config = {
    MONGO_URI: process.env.MONGO_URI
};

export default config;