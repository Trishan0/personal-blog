import { Router } from "express";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import fs from "node:fs";
import {createNewArticle, deleteArticle, getArticleForEdit, updateArticle} from "../controllers/admin.controller.mjs";
import {getAllArticles} from "../controllers/user.controller.js"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const adminRouter = Router();

// // With JSON data
// adminRouter.get('/admin/dashboard', (req, res)=>{
//     const articleData = JSON.parse(
//         fs.readFileSync(path.join(__dirname, '../data/article.json'), 'utf-8')
//     )
//
//     res.render('pages/admin/dashboard', {
//         articles: articleData.articles,
//         links: ['/css/pages/dashboard.css']
//
//     })
// })

adminRouter.get('/admin/new-article', (req, res)=>{
    res.render('pages/admin/new-article',{
        links: ['/css/pages/new_article.css']
    })
})

adminRouter.post('/admin/new-article', createNewArticle)
adminRouter.get('/admin/dashboard',getAllArticles('pages/admin/dashboard','/css/pages/dashboard.css'))
adminRouter.delete('/admin/article/:id', deleteArticle)
adminRouter.get('/admin/edit-article/:id', getArticleForEdit);
adminRouter.put('/admin/article/:id', updateArticle);
