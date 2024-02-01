import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../users/usersModel.js";

const registerRouter = express.Router();

registerRouter.post("/", async (req, res, next) => {
    try {
        const { email, password, name, lastName, birthday, bio, avatar } = req.body;

        // Verifica se l'utente esiste già
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).send({ message: "User already exists" });
        }

        // Hashing della password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creazione del nuovo utente
        const user = new User({
            email: email,
            password: hashedPassword,
            name: name,
            lastName: lastName,
            birthday: birthday,
            avatar: avatar,
            bio: bio,
            // Aggiungi altri campi necessari
        });

        // Salva il nuovo utente nel database
        await user.save();

        // Creazione del payload per il token
        const payload = {
            id: user._id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            birthday: user.birthday,
            avatar: user.avatar,
            bio: user.bio,
        };

        // Generazione del token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '120d' });

        res.status(201).json({ message: "User registered successfully", token: token });
    } catch (error) {
        next(error);
    }
});

export default registerRouter;

