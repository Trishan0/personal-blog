import express from 'express';
import { userRouter } from "./src/routes/user.mjs";
import {articleRouter} from "./src/routes/article.mjs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {adminRouter} from "./src/routes/admin.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter)
app.use(articleRouter)
app.use(adminRouter)

//set template engine
app.set('view engine', 'ejs')



app.listen(4000, () => {
    console.log('Server is running on port 4000')
})