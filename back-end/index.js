import express from 'express';
import {dbConnect} from './config/db.js'
import router from './route/userRoute.js';
import fileUpload from 'express-fileupload';
import cors from 'cors'

const PORT = 9000;
const app = express();
app.use(express.json());//enable json
app.use(fileUpload());//enable file upload
app.use(cors());//enable to connect frontend and backend
dbConnect();

app.use('/api',router);

app.listen(PORT,()=>{
    console.log("Server is running...");
})