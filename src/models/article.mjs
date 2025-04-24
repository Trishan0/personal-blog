import mongoose, {mongo} from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Article Title is Required"],
        trim: true,
    },
    date:  {
        type:Date,
        default: Date.now()
    },
    content: String,
})

export const Article = mongoose.model('Article', articleSchema);