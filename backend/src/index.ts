import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import rootRouter from '../src/routes/index';
import cors from 'cors';
import bodyParser = require('body-parser');
dotenv.config();
const app = express();
// parse application/json
app.use(bodyParser.json());
//Enable All CORS Requests
app.use(cors());
//Route all request coming on /api/v1 to this rootRouter
app.use("/api/v1",rootRouter);
//connect to MongoDB URL
 mongoose.connect(process.env.MONGODB_URL!) //The `!` symbol in TypeScript is called the non-null assertion operator. 
 .then(()=>{
    console.log("DB connection successful");
    })
    .catch((err)=>{
        console.log("DB connection Error: ",err);
    })

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server Listening on ${process.env.PORT}` )
});