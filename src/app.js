import express from "express";
import morgan from "morgan";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use(morgan("dev"));

export default app;