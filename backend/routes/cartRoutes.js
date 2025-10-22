import express from "express";

import {
  addToCart,
  removeFromCart,
  getAllCartItems,
} from "../controllers/cartController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", authenticate, addToCart);
cartRouter.post("/remove", authenticate, removeFromCart);
cartRouter.get("/get", authenticate, getAllCartItems);

export default cartRouter;
