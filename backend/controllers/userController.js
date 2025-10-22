import bcrypt from "bcrypt";
import validator from "validator";

import userModel from "../models/userModel.js";
import { setAuthCookie } from "../utils/jwt.js";

// sing in
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exists" });
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const payload = { userId: user._id };
    setAuthCookie(res, payload);

    return res.status(200).json({
      success: true,
      message: "User signed in successfully",
    });
  } catch (error) {
    console.error("sign in error", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

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
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// sign out
export const signOutUser = (req, res) => {
  // console.log("signOutUser function executed");
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    expires: new Date(0), // Set expiration to a past date
    path: "/",
  });
  return res.json({ success: true });
};

// authenticate user
export const authenticateUser = (req, res) => {
  if (req.body.userId) {
    return res.json({ success: true });
  }
};
