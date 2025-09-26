import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './route/useRoute.js';
import dbConnect from './config/db.js';
import taskRouter from './route/taskRoute.js';

dotenv.config()

const app =express();
const port = process.env.PORT || 8000;
console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter)
app.use('/api/tasks',taskRouter)
app.get('/',(req,res)=>{
  res.json('well come to Home')
})
app.listen(port,()=>{
  dbConnect();
  console.log(`app start listining at http://localhost:${port}`)
})