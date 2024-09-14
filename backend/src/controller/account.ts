import { Request, Response } from "express";
import Account from "../models/account";
import { transferBodyProps } from "../zod/account";
import mongoose from "mongoose";
interface CustomRequest extends Request {
    userId?: string; // Mark it as optional in case it's not always present
  }

export const getBalanceHandler = async (req:CustomRequest,res:Response)=>{
    try {
        const userId = req.userId;
        const userAccount = await Account.findOne({userId});
        res.json({
            balance: userAccount!.balance
        })
    } catch (error) {
        res.status(500).json({
            message: `Error While getting Balance ${error}`
        })
    }
}

export const transferHandler = async (req:CustomRequest,res:Response)=>{
    const session = await mongoose.startSession();
    try {
        session.startTransaction(); // Explicitly start the transaction
        const {amount,to} = req.body;
        const {success} = transferBodyProps.safeParse({amount,to});
        if(!success){
            res.status(411).json({
                message: "Wrong Inputs Sent"
            });
        } else {
            //Fetch the accounts within the transaction
            const account = await Account.findOne({userId: req.userId}).session(session);
            if (!account || account.balance < amount) {
                await session.abortTransaction();
                res.status(400).json({
                    message: "Insufficient Balance"
                });
            }
            const toAccount = await Account.findOne({userId: to}).session(session);
            if (!toAccount) {
                await session.abortTransaction();
                res.status(400).json({
                    message: "Invalid Account"
                });
            }
            //Perform the transfer
            await Account.updateOne({userId:req.userId},{$inc: {balance: -amount}}).session(session);
            await Account.updateOne({userId:to},{$inc: {balance: +amount}}).session(session);
            //Commit the transaction
            await session.commitTransaction();
            res.json({
                message: "Transfer Successful"
            });
        }

    } catch (error) {
        await session.abortTransaction(); // Ensure the transaction is aborted in case of any error
        res.status(500).json({
            message: `Error While transferring Balance ${error}`
        })
    } finally {
        session.endSession(); // Always end the session
      }
}