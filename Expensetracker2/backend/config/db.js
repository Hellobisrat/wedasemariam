import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const db = async()=>{
  
     await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ DB connected'))
  .catch((error) => {
    console.error('❌ Connection error:', error);
    process.exit(1);
  });

}


export default db;