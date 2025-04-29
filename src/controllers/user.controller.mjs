import {Article} from "../models/article.mjs";

const getArticleById = async (req, res) => {
    try {
        const article = await Article.findOne({ id: req.params.id });
        if (!article) {
            return res.status(404).render('pages/article', {
                article,
                links: ['/css/pages/new_article.css']
            });
        }

        article.content = article.content || "";

        res.render('pages/article', {
            article,
            links: ['/css/pages/new_article.css']
        });

    } catch (e) {
        res.status(500).render('error', {
            message: "Server error"
        });
    }
};
const getAllArticles = (viewName = 'pages/home', cssFile) => {
    return async (req, res) => {
        try {
            const articles = await Article.find({});
            if (articles?.length > 0) {
                res.render(viewName, {
                    articles,
                    links: [cssFile]
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "No Articles found!"
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong! Please try again!"
            });
        }
    };
};


export {
    getAllArticles,
    getArticleById
}