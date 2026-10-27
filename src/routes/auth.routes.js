import { Router } from "express";

const authRouter = Router();

// Register user
authRouter.post("/register", registerUser);

export default authRouter;