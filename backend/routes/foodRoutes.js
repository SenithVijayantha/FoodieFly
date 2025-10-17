import express from "express";
import multer from "multer";

import {
  addFood,
  getFoodsList,
  removeFood,
} from "../controllers/foodControllers.js";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new Error("Only image files are allowed"));
    }
    callback(null, true);
  },
});

const uploadNone = multer().none();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFoodsList);
foodRouter.delete("/remove", uploadNone, removeFood);

export default foodRouter;
