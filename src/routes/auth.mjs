import {Router} from 'express';
import { registerUser } from "../controllers/auth.controller.mjs";

export const authRouter = Router();

authRouter.post('/register', registerUser);