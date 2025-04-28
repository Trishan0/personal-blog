import { Router } from "express";
export const articleRouter = Router();
// import fs from 'fs';
// import path from "node:path";
// import {fileURLToPath} from "node:url";
import { getArticleById } from "../controllers/user.controller.mjs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// // With JSON data
// articleRouter.get('/articles/:id', (req, res) => {
//     const { id } = req.params;
//     const articleData = JSON.parse(
//         fs.readFileSync(path.join(__dirname, '../data/article.json'), 'utf-8')
//     );
//
//     const article = articleData.articles.find(a => a.id === parseInt(id));
//     if (!article) return res.status(404).send('Article not found');
//
//     res.render('pages/article', {
//         article,
//         links: ['/css/pages/new_article.css']
//     });
// });

articleRouter.get('/article/:id', getArticleById)