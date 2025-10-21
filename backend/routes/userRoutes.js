import express from "express";

import {
  authenticateUser,
  signInUser,
  signOutUser,
  signUpUser,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/signup", signUpUser);
userRouter.post("/signin", signInUser);
userRouter.post("/signout", signOutUser);
userRouter.get("/auth/status",  authenticate,authenticateUser);

export default userRouter;
