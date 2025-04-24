import express from 'express';
import {Article} from "../models/article.mjs";

const createNewArticle = async (req, res)=>{
    try {
        const articleData = req.body
        const article = await Article.create(articleData)

        if (article) {
            res.status(201).json({
                success: true,
                message: "Article Added Successfully !",
                data: article
                }
            )
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create the article",
            error: error.message
        })
    }
}

export {
    createNewArticle
}