//Creating routing file structure i.e. all file routes to /api/v1
import express from 'express';
import userRouter from './user'
const router = express.Router();

// Mounts all the routes in userRouter on /user
//Mounts all the user routes in userRouter on api/v1/
router.use("/user",userRouter)
export default router;