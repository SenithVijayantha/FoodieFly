import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food items
export const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.status(201).json({ success: true, message: "Item added" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error " });
  }
};
