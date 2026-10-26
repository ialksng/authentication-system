import dotenv from "dotenv";

// Load environment variables from .env file    
dotenv.config();

// Export environment variables
const config = {
    MONGO_URI: process.env.MONGO_URI
};

export default config;