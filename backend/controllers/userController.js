import bcrypt from "bcrypt";
import validator from "validator";

import userModel from "../models/userModel.js";
import { setAuthCookie } from "../utils/jwt.js";

// sing in
export const signInUser = async (req, res) => {};

// sign up
export const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // checks if the user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // validate email format and password strength
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Email is not valid" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be equal or longer than 8 characters",
      });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save({});
    const { password: _, ...userData } = savedUser._doc;

    if (savedUser) {
      const payload = { userId: savedUser._id };
      setAuthCookie(res, payload);
    }
    return res.status(201).json({
      success: true,
      data: userData,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("signup error", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};
