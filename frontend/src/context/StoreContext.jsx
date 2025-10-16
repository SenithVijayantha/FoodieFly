import { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return { ...prev, [itemId]: 1 };
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    // Getting minus number for count hasn't handled here because the frontend
    // will only display the decrement button when the count is higher than zero.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItemsAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItemsAmount,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
