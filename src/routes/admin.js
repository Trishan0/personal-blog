import { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const adminRouter = Router();

adminRouter.get('/admin/dashboard', (req, res)=>{
    const articleData = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../data/article.json'), 'utf-8')
    )

    res.render('pages/admin/dashboard', {
        articles: articleData.articles
    })
})
adminRouter.get('/admin/new-article', (req, res)=>{
    res.render('pages/admin/new-article',)
})