import express from 'express';
import {Article} from "../models/article.mjs";

const createNewArticle = async (req, res)=>{
    try {
        const articleData = req.body
        const article = await Article.create(articleData)

        if (article) {
            res.status(201).redirect('/admin/new-article')
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create the article",
            error: error.message
        })
    }
}


const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedArticle = await Article.findOneAndDelete({ id: parseInt(id) });
        
        if (!deletedArticle) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            });
        }
        
        // Redirect back to dashboard after successful deletion
        res.status(200).json({
            success: true,
            message: "Article deleted successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete the article",
            error: error.message
        });
    }
};
export {
    createNewArticle,
    deleteArticle
}