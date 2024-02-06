import express from 'express';
import { PORT,URL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors({
  // origin:'http://localhost:3000',
  // methods:['GET','POST','UPDATE','DELETE'],
  // allowedHeaders:['Content-Type']
}));


app.get('/',(req,res)=>{
  return res.json('well come to Mern')
})
app.use('/books',booksRoute)

mongoose.connect(URL)
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`App is listening to port:${PORT}`)
  })
  console.log('App connected to database')
})
.catch((error)=>{
  console.log(error)
})