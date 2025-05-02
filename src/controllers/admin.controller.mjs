import {Article} from "../models/article.mjs";
import {User} from "../models/user.mjs";
import { getAllArticles } from "./user.controller.mjs";

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
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete the User",
            error: error.message
        });
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find({});

        const groupedUsers = {
            admins: users.filter(user => user.role === 'admin'),
            regularUsers: users.filter(user => user.role === 'user')
        };

        return groupedUsers;

    } catch (error) {
        throw new Error("Failed to get users: " + error.message);
    }
};


const getDashboardData = async (req, res, next) => {
    try {
        const { admins, regularUsers } = await getAllUsers();
        const articles = await Article.find({}); // Directly fetch articles here

        res.render('pages/admin/dashboard', {
            articles,
            admins,
            users: regularUsers,
            links: ['/css/pages/dashboard.css']
        });

    } catch (error) {
        next(error);
    }
};

export {
    createNewArticle,
    getArticleForEdit,
    updateArticle,
    deleteArticle,
    getDashboardData,
    deleteUser
}