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
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// remove food items
export const removeFood = async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body || !req.body.id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id",
      });
    }

    const foodId = req.body.id;

    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    fs.unlink(`./uploads/${food.image}`, (err) => {
      if (err) {
        console.error(err);
      }
    });

    await foodModel.findByIdAndDelete(foodId);
    return res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
