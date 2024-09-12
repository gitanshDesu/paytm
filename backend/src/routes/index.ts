//Creating routing file structure i.e. all file routes to /api/v1
import express from 'express';
import userRouter from './user'
import accountRouter from './account';
const router = express.Router();

// Mounts all the routes in userRouter on /user
//Mounts all the user routes in userRouter on api/v1/
router.use("/user",userRouter);
//Mount all the account routes in accountRouter on api/v1/
router.use("/account",accountRouter);
export default router;