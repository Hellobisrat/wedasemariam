import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
console.log("JWT_SECRET:", JWT_SECRET);
 const authMiddleware = async (req,res,next)=>{
// GRAP THE BEARE from authorization header
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer')){
    return res.status(401).json({success:false,message:"Not Authorized,token missing"})
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token,JWT_SECRET);
    const user = await User.findById(payload.id).select('-password')
    if (!user){
      return res.status(401).json({success:false, message:"User not found"})
    }
    req.user=user;
    next();
  } catch (error) {
     console.error("JWT verification error:", error.message);

    res.status(500).json({success:false,message:"Token invalid or expired "})
  }

}

export default authMiddleware;