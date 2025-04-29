import { User } from "../models/user.mjs"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
//register user
const registerUser = async (req, res) => {
    try {
        console.log("Form data received:", req.body); // Add this for debugging

        const { firstname, lastname, email, password } = req.body;

        // Validation
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

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
            // Use res.redirect() for HTML form submissions
            return res.status(201).redirect('/');
        } else {
            return res.status(400).json({
                success: false,
                message: "Something went wrong while creating user"
            })
        }

    } catch (error) {
        console.error("Registration error:", error); // Better error logging
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const isPwdMatch = await bcrypt.compare(password,user.password)

        if (!isPwdMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }
        const accessToken = jwt.sign({
            userId : user._id,
            email : user.email,
            role : user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })

        res.status(201).redirect('/');


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}
export {
    registerUser,
    loginUser
}