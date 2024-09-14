import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
// Extend the Request interface to include userId
interface CustomRequest extends Request {
    userId?: string; // Mark it as optional in case it's not always present
  }
export const authMiddleware = async (req:CustomRequest,res:Response,next:NextFunction)=>{
   try{
    const authHeader = req.headers.authorization;
    //Type Assertion used
    if (!authHeader || !(authHeader as string).startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    //Type Assertion used
    const token = (authHeader as string).split(" ")[1];
    //Type Assertion used
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload;
        req.userId = decoded.userId;
        next();
   }catch (error) {
        return res.status(500).json({});
    }
}