import express from 'express';
const app = express();
//import {join} from 'path';
const port=process.env.PORT ||'3000';
import {router} from './routes/web.js';
import connectdb from './db/connectdb.js';
const DATABASE_URL = process.env.DATABASE_URL||'mongodb://localhost:27017';
connectdb(DATABASE_URL);
app.use(express.urlencoded({extended:false})); 
//app.use(express.static(join(process.cwd(),'public')));
app.use('/',express.static((process.cwd(),'public'))); // 
app.set('view engine','ejs'); 
app.use("/",router);
//app.use(middleware)
app.listen(port,()=>{ 
    console.log(`server is listening on ${port}`);  
})  