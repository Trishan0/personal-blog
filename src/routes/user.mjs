import { Router } from "express";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import fs from "node:fs";
import {getAllArticles} from "../controllers/user.controller.mjs"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const userRouter = Router();

// // With JSON data
// userRouter.get(['/', '/home'], (req, res) => {
//     const articleData = JSON.parse(
//         fs.readFileSync(path.join(__dirname, '../data/article.json'), 'utf-8')
//     );
//
//     res.render('pages/home', {
//         articles: articleData.articles,
//         links: ['/css/pages/home.css']
//
//     });
// });

userRouter.get(['/', '/home'], getAllArticles('pages/home','/css/pages/home.css'))