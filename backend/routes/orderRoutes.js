import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authenticate, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
