import { createContext, useEffect, useState } from "react";
import axios from "axios";

import { foodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);

  let deliveryFee = 0;

  if (cartItemsCount > 0) {
    deliveryFee = 2;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return { ...prev, [itemId]: 1 };
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
    setCartItemsCount(cartItemsCount + 1);
  };

  const removeFromCart = (itemId) => {
    // Getting minus number for count hasn't handled here because the frontend
    // will only display the decrement button when the count is higher than zero.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartItemsCount(cartItemsCount - 1);
  };

  const getTotalCartItemsPrice = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  // Check whether the user is authenticated or not
  const checkUserAuthStats = async () => {
    try {
      const response = await axios.get(`${url}/api/user/auth/status`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setIsAuthenticated(true);
        console.log(response.data.success);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    foodList,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItemsPrice,
    cartItemsCount,
    deliveryFee,
    url,
    checkUserAuthStats,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
