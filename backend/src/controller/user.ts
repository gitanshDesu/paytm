import express, { Request,Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { signInBodyProps, signUpBodyProps,updateBodyProps } from '../zod/user';
interface CustomRequest extends Request {
    userId?: string; // Mark it as optional in case it's not always present
  }

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
};

export const updateHandler = async (req:CustomRequest, res:Response)=>{
    try {
        const {password,firstName,lastName} = req.body
        const {success} = updateBodyProps.safeParse({password,firstName,lastName});
        if(!success){
            res.status(411).json({
                message: "Error while updating information"
            })
        }
        // {new:true} : returns user after it is updated otherwise we get user before it is updated.
        const updateUser = await User.findOneAndUpdate({_id: req.userId},{firstName,lastName},{new: true});
        const newPassword = await updateUser!.createHash(password);
            updateUser!.password = newPassword;
            updateUser!.save();
       res.json({
        message: "Updated successfully"
       })
        
    } catch (error) {
        res.status(500).json({
            message: `Can't Update information right now ${error}`
        })
    }
};

export const getUsersHandler = async (req:Request,res:Response)=>{
    try {
        const filter = req.query.filter || "";
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex":filter
                },
            },{
                lastName: {
                    "$regex":filter
                }
            }]
        });
        if(users){
            res.json({
                user: users.map(user =>({
                    username: user.username,
                    firtName: user.firstName,
                    lastName: user.lastName,
                    _id: user._id
                }))
            });
        };
    } catch (error) {
        res.status(500).json({
            message: `Can't Get Users right now ${error}`
        })
    }
};
