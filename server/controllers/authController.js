import user from "../models/user.js";
import bcrypt from 'bcrypt';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new user({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json("User created successfully!");
    } catch (error) {
        next(error);
    };
};