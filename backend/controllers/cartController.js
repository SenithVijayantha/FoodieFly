import userModel from "../models/userModel.js";

// add items to user cart
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    console.log(itemId);

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing userId" });
    } else if (!itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing itemId" });
    }

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};

    console.log("Adding item:", itemId);

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(201).json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while trying to add to the cart",
    });
  }
};

// remove items from user cart
export const removeFromCart = async (req, res) => {};

// fetch user cart data
export const getAllCartItems = async (req, res) => {};
