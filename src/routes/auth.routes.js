import { Router } from "express";
import * as authController from "../controllers/auth.controllers.js";

const authRouter = Router();

// Register user - POST: /api/auth/register
authRouter.post("/register", authController.registerUser);

// Get user - GET: /api/auth/get-me
authRouter.get("/get-me", authController.getMe);


export default authRouter;