import bcrypt from "bcrypt";
import validator from "validator";

import userModel from "../models/userModel.js";

// sing in
export const signInUser = async (req, res) => {};

// sign up
export const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // checks if the user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validate email format and password strength
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not valid" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be equal or longer than 8 characters",
      });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();
  } catch (error) {}
};
