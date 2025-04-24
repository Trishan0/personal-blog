import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
import {APP_CONFIG} from "../config/index.mjs";

const connection = mongoose.createConnection(APP_CONFIG.MONGODB_URI);
const AutoIncrement = AutoIncrementFactory(connection);

const articleSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: [true, "Article Title is Required"],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: String,
});

articleSchema.plugin(AutoIncrement, { inc_field: 'id' });
export const Article = mongoose.model('Article', articleSchema);