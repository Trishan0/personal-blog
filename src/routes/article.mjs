import { Router } from "express";
import data from "../data/article.json" with { type: "json" };
export const articleRouter = Router();

articleRouter.get("/article/:id", (req, res)=>{
    const {id} = req.params;
    if (!id) return res.status(400).json({message: "Please provide an id"})

    const article = data.articles.find(article => article.id === Number(id))

    if (!article) {
        return res.status(404).json({message: "Article not found"})
    }
    return res.status(200).json({
        message: "Article found",
        data: article
    });
});