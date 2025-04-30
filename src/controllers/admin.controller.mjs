import {Article} from "../models/article.mjs";
const createNewArticle = async (req, res)=>{
    try {
        const articleData = req.body
        const article = await Article.create(articleData)

        if (article) {
            res.status(200).json({
                success: true,
                message: "Article Published successfully",
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create the article",
            error: error.message
        })
    }
}

const getArticleForEdit = async (req, res)=>{
    try {
        const { id } = req.params;
        const article = await Article.findOne({ id: parseInt(id) });

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            });
        }
        
        // Redirect back to dashboard after successful deletion
        res.status(200).render('pages/admin/edit-article',{
            article,
            links: ['/css/pages/new_article.css']
        })
    }  catch (error) {
        res.status(500).render('error', {
            message: "Failed to fetch the article for editing"
        });
    }
}


const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedArticle = await Article.findOneAndUpdate(
            { id: parseInt(id) },
            updateData,
            { new: true } // Returns the updated document
        );

        if (!updatedArticle) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Article updated successfully",
            article: updatedArticle
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update the article",
            error: error.message
        });
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
    getArticleForEdit,
    updateArticle,
    deleteArticle
}