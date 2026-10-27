import userModel from "../models/user.model.js";
import crypto from "crypto"; // to hash password

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isAlreadyRegistered) {
        return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const newUser = await userModel.create({ username, email, password: hashedPassword });
}

export default { registerUser };