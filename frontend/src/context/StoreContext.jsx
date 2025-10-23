import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

// import { foodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [foodList, setFoodList] = useState([]);

  let deliveryFee = 0;

  if (cartItemsCount > 0) {
    deliveryFee = 2;
  }

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data);
    } catch (error) {}
  };

  const loadCartData = async () => {
    const response = await axios.get(`${url}/api/cart/get`, {
      withCredentials: true,
    });
    setCartItems(response.data.data);
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return { ...prev, [itemId]: 1 };
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });

    try {
      const response = await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        {
          withCredentials: true,
        }
      );
      await getCartItemsCount();
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const getCartItemsCount = async () => {
    try {
      const response = await axios.get(`${url}/api/cart/get`, {
        withCredentials: true,
      });

      const itemCount = Object.keys(response.data.data).length;

      if (itemCount !== 0) {
      setCartItemsCount(itemCount);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const removeFromCart = async (itemId) => {
    // Getting minus number for count hasn't handled here because the frontend
    // will only display the decrement button when the count is higher than zero.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    try {
      const response = await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        {
          withCredentials: true,
        }
      );
      await getCartItemsCount();
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const getTotalCartItemsPrice = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product._id === item);
        if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      } else {
        console.warn(`Item with id ${item} not found in foodList`);
      }
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

  useEffect(() => {
    // console.log(cartItems);
    fetchFoodList();
    getCartItemsCount();
    loadCartData();
  }, []);

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
