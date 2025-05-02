import { Router } from "express";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import fs from "node:fs";
import {createNewArticle, deleteArticle, getArticleForEdit, updateArticle, getDashboardData,deleteUser} from "../controllers/admin.controller.mjs";
import {getAllArticles} from "../controllers/user.controller.mjs"
import { adminMiddleware } from "../middleware/admin.middleware.mjs";

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

adminRouter.get('/admin/new-article', adminMiddleware , (req, res)=>{
    res.render('pages/admin/new-article',{
        links: ['/css/pages/new_article.css']
    })
})
adminRouter.post('/admin/new-article', adminMiddleware , createNewArticle)
adminRouter.get('/admin/dashboard', adminMiddleware, getDashboardData);
adminRouter.delete('/admin/article/:id', adminMiddleware , deleteArticle)
adminRouter.delete('/admin/user/:id', adminMiddleware , deleteUser)
adminRouter.get('/admin/edit-article/:id', adminMiddleware , getArticleForEdit);
adminRouter.put('/admin/article/:id', adminMiddleware , updateArticle);
