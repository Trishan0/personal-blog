import express from 'express';
import { userRouter } from "./src/routes/user.mjs";
import {articleRouter} from "./src/routes/article.mjs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(userRouter)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/article',articleRouter)
app.get('/', (req, res)=>{
    console.log(req)
    res.json(
        {
            message: 'Hello World',
            name: 'Rahul'
        }
    )
})


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})