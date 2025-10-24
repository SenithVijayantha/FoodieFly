import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  listAllOrders,
  placeOrder,
  updateOrderStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authenticate, placeOrder);
orderRouter.post("/verify", authenticate, verifyOrder);
orderRouter.post("/myorders", authenticate, userOrders);
orderRouter.get("/list", listAllOrders);
orderRouter.post("/update-status", updateOrderStatus);

export default orderRouter;
