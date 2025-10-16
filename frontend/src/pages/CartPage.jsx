import React, { useContext } from "react";
import { X } from "lucide-react";

import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router";

const CartPage = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartItemsPrice,
    cartItemsCount,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  let deliveryFee = 0;

  if (cartItemsCount > 0) {
    deliveryFee = 2;
  }

  return (
    <div>
      {cartItemsCount !== 0 && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr className="text-center" key={index}>
                      <th>
                        <img
                          className="w-30 h-20 object-cover rounded-lg mx-auto"
                          src={item.image}
                          alt=""
                        />
                      </th>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{cartItems[item._id]}</td>
                      <td>${cartItems[item._id] * item.price}</td>
                      <td>
                        <button
                          className="btn btn-circle btn-primary btn-outline btn-xs"
                          onClick={() => removeFromCart(item._id)}
                        >
                          <X width={15} />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      )}

      <div
        className="p-12 grid grid-cols-2 gap-20 justify-between items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, 336px)",
        }}
      >
        <div>
          <h3 className="text-2xl font-semibold">Cart Total</h3>
          <table className="table max-w-sm my-4">
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
            onClick={() => navigate("/order")}
            disabled={cartItemsCount === 0}
          >
            CHECKOUT
          </button>
        </div>

        <div className="py-10">
          <p className="text-slate-400 pb-2">
            If you have a promo code, Enter it here
          </p>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input type="text" placeholder="promo code" required />
              </label>
              {/* <div className="validator-hint hidden"></div> */}
            </div>
            <button className="btn btn-neutral join-item">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
