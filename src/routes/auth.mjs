import {Router} from 'express';
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.mjs";
import {adminRouter} from "./admin.mjs";

export const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.get('/register', (req, res)=>{
    res.render('pages/sign-up')
})

adminRouter.get('/login', (req, res)=>{
    res.render('pages/sign-up')
})
adminRouter.post('/login', loginUser);
adminRouter.post('/logout', logoutUser);