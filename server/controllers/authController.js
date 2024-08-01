import user from "../models/user.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new user({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json("User created successfully!");
    } catch (error) {
        res.status(500).json(error.message);
    };
};
