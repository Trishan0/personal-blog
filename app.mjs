import express from 'express';
import { userRouter } from "./src/routes/user.mjs";
import {articleRouter} from "./src/routes/article.mjs";
import {adminRouter} from "./src/routes/admin.mjs";
import {authRouter} from "./src/routes/auth.mjs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import { connectToDB } from "./src/database/db.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(userRouter)
app.use(articleRouter)
app.use(adminRouter)
app.use(authRouter)

//set template engine
app.set('view engine', 'ejs')



connectToDB().then(() => {
    app.listen(4000, () => {
        console.log('Server is running on port 4000')
    })
}).catch(err => {
    console.error('Failed to connect to the database:', err)
    process.exit(1)
})