import express, { Request,Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { signInBodyProps, signUpBodyProps } from '../zod/user';

export const signUpHandler = async (req:Request,res:Response)=>{
    try {
        const {username,firstName,lastName,password} = req.body;
        //Do Input Validation
        const {success} = signUpBodyProps.safeParse({username,firstName,lastName,password});
        if(!success){
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }
        //Check if User already Exists
        const checkUser = await User.findOne({username});
        if (checkUser) {
          return  res.status(411).json({
                message: "Email already taken"
            });
        } else{
            const newUser = new User({
                username,
                firstName,
                lastName
            });
           const passwordHash = await newUser.createHash(password);
           newUser.password = passwordHash;
           await newUser.save();
           const userId = newUser._id;
           //JWT: create token
           const token = jwt.sign({userId},process.env.JWT_SECRET!)
            res.status(200).json({
            message: "User created successfully",
            token: token
        });
        }

    } catch (error) {
        res.status(500).json({
            message: "Error occurred while signing up",
            error
        });
    }
}

export const signInHandler = async (req:Request,res:Response)=>{
    try {
        const {username,password} = req.body;
        const {success} = signInBodyProps.safeParse({username,password});
        if(!success){
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }
        const checkUser = await User.findOne({username});
        if (!checkUser) {
            res.status(411).json({
                message: "User Doesn't Exist"
            });
        } else{
            const validPassword = await checkUser.validatePassword(password);
            if (validPassword) {
                const userId = checkUser._id;
           //JWT: sign and return token
           const token = jwt.sign({userId},process.env.JWT_SECRET!)
           res.status(200).json({
            token: token
        });
        }else {
            return res.status(400).json({
              message: "Incorrect Password",
            });
          }
        }

    } catch (error) {
        res.status(500).json({
            message: "Error occurred while logging in",
            error
        });
    }
}