import { Router } from "express";
import data from "../data/article.json" with { type: "json" };
export const articleRouter = Router();

articleRouter.get("/all-articles", (_, res)=>{
    res.status(200).json({
        message: "All articles",
        data:data.articles
    })
    }
)

articleRouter.get("/id", (req, res)=>{
    const {id} = req.query;
    if (!req.query.id) return res.status(400).json({message: "Please provide an id"})

    if ( id !== undefined){
        const article = data.articles.find(article => article.id === Number(id))
        return  res.status(200).json({
            message: "All articles",
            data:article
        })
    }
    res.sendStatus(200 )
})