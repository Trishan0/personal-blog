import { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const userRouter = Router();



userRouter.get(['/','/home'], (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/home.html'));
})