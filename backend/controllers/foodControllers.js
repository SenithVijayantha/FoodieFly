import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food items
export const addFood = async (req, res) => {
  try {
    // validate request body
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.price ||
      !req.body.category ||
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.filename,
    });

    await food.save();
    res.status(201).json({ success: true, message: "Item added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// get food list
export const getFoodsList = async (req, res) => {
  try {
    const foods = await foodModel.find().lean(); // lean() for better performance
    if (!foods || foods.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No foods found",
      });
    }
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
