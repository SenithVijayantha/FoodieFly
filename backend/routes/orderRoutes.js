import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  listAllOrders,
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authenticate, placeOrder);
orderRouter.post("/verify", authenticate, verifyOrder);
orderRouter.post("/myorders", authenticate, userOrders);
orderRouter.post("/myorders", authenticate, userOrders);
orderRouter.get("/list", authenticate, listAllOrders);

export default orderRouter;
