import {Router} from 'express';
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.mjs";

export const authRouter = Router();

// User registration routes
authRouter.post('/register', registerUser('user'));
authRouter.get('/register', (req, res) => {
    res.render('pages/sign-up');
});

// Admin registration routes
authRouter.post('/admin/register', registerUser('admin'));
authRouter.get('/admin/register', (req, res) => {
    res.render('pages/sign-up');
});

// Login routes
authRouter.get('/login', (req, res) => {
    res.render('pages/sign-up');
});
authRouter.post('/login', loginUser);
authRouter.post('/logout', logoutUser);

