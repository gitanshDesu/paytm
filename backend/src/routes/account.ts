import express from "express";
import { getBalanceHandler, transferHandler } from "../controller/account";
import { authMiddleware } from "../middleware/middleware";

const accountRouter = express.Router();

accountRouter.get("/balance",authMiddleware,getBalanceHandler);
accountRouter.post("/transfer",authMiddleware,transferHandler);

export default accountRouter;