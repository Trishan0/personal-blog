import { User } from "../models/user.mjs"
import bcrypt from "bcryptjs"
//register user
const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const isUserExist = await User.findOne({email})
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist with this email"
            })
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create a new user
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: "user",
        })

        await newUser.save();

        if (newUser) {
            res.status(201).json({
                success: true,
                message: "User created successfully",
                data: newUser
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Something went wrong while creating user"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export { registerUser }