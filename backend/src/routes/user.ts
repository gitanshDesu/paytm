import express from 'express';
import { getUsersHandler, signInHandler, signUpHandler, updateHandler } from '../controller/user';
import { authMiddleware } from '../middleware/middleware';
const userRouter = express.Router();

userRouter.post("/signup",signUpHandler);
userRouter.post("/signin",signInHandler);
userRouter.put("/",authMiddleware,updateHandler);
userRouter.get("/bulk",authMiddleware,getUsersHandler);

export default userRouter;