import {Article} from "../models/article.mjs";


export const getAllArticles = async (req, res)=>{
    try {
        const allArticles = await Article.find({})
        if (allArticles?.length > 0) {
            res.status(200).json({
                success: true,
                message: "List of Articles fetched successfully",
                data: allArticles
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Articles found !",

            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please Try again!"
        })
    }
}
