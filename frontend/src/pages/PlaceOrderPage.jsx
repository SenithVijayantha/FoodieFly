import React, { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../context/StoreContext";

const PlaceOrderPage = () => {
  const {
    getTotalCartItemsPrice,
    deliveryFee,
    cartItemsCount,
    foodList,
    cartItems,
    url,
  } = useContext(StoreContext);

  const [deliveryInfo, setDeliveryInfo] = useState({});

  const handleDeliveryInfo = (e) => {
    setDeliveryInfo((deliveryInfo) => ({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let orderItems = [];
    foodList.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: deliveryInfo,
      items: orderItems,
      amount: getTotalCartItemsPrice() + 2,
    };

    try {
      let response = await axios.post(
        `${url}/api/order/place`,
        orderData,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error(error);
    }
    // console.log(orderItems);
    // console.log(deliveryInfo);
    return;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 items-start place-items-center my-14"
      >
        <div>
          <h3 className="text-2xl font-semibold p-4">Delivery Information</h3>
          <fieldset className="grid gap-4 fieldset w-xs p-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                required
                name="firstName"
                type="text"
                className="input w-60"
                placeholder="First Name"
                value={deliveryInfo.firstName || ""}
                onChange={handleDeliveryInfo}
              />
              <input
                required
                name="lastName"
                type="text"
                className="input w-60"
                placeholder="Last Name"
                value={deliveryInfo.lastName || ""}
                onChange={handleDeliveryInfo}
              />
            </div>
            <input
              required
              name="email"
              type="email"
              className="input w-80 sm:w-122"
              placeholder="Email address"
              value={deliveryInfo.email || ""}
              onChange={handleDeliveryInfo}
            />
            <input
              required
              name="street"
              type="text"
              className="input  w-80 sm:w-122"
              placeholder="Street"
              value={deliveryInfo.street || ""}
              onChange={handleDeliveryInfo}
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                required
                name="city"
                type="text"
                className="input w-60"
                placeholder="City"
                value={deliveryInfo.city || ""}
                onChange={handleDeliveryInfo}
              />
              <input
                required
                name="state"
                type="text"
                className="input w-60"
                placeholder="State/Province"
                value={deliveryInfo.state || ""}
                onChange={handleDeliveryInfo}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                required
                name="zipcode"
                type="text"
                className="input w-60"
                placeholder="Zip code"
                value={deliveryInfo.zipcode || ""}
                onChange={handleDeliveryInfo}
              />
              <input
                required
                name="country"
                type="text"
                className="input w-60"
                placeholder="Country"
                value={deliveryInfo.country || ""}
                onChange={handleDeliveryInfo}
              />
            </div>
            <input
              required
              name="phone"
              type="tel"
              className="input  w-80 sm:w-122"
              placeholder="Phone"
              value={deliveryInfo.phone || ""}
              onChange={handleDeliveryInfo}
            />
          </fieldset>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-semibold m-4">Cart Total</h3>
            <table className="table w-xs max-w-sm my-4">
              <tbody>
                <tr>
                  <td className="">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>${getTotalCartItemsPrice()}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <div className="flex justify-between">
                      <p>Delivery Fee</p>
                      <p>${deliveryFee}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <div className="flex justify-between font-semibold">
                      <p>Total</p>
                      <p>${getTotalCartItemsPrice() + deliveryFee}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-primary btn-sm"
              disabled={cartItemsCount === 0}
              type="submit"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrderPage;
