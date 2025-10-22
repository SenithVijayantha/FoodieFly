import express from "express";

import {
  addToCart,
  removeFromCart,
  getAllCartItems,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);
cartRouter.get("/get", getAllCartItems);

export default cartRouter;
