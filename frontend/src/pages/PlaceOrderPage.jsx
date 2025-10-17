import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrderPage = () => {
  const { getTotalCartItemsPrice, deliveryFee, cartItemsCount } =
    useContext(StoreContext);

  return (
    <div>
      <form className="grid lg:grid-cols-2 items-start place-items-center my-14">
        <div>
          <h3 className="text-2xl font-semibold p-4">Delivery Information</h3>
          <fieldset className="grid gap-4 fieldset w-xs p-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="input w-60"
                placeholder="First Name"
              />
              <input
                type="text"
                className="input w-60"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="input w-80 sm:w-122"
              placeholder="Email address"
            />
            <input type="email" className="input  w-80 sm:w-122" placeholder="Street" />
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="text" className="input w-60" placeholder="City" />
              <input
                type="text"
                className="input w-60"
                placeholder="State/Province"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="input w-60"
                placeholder="Zip code"
              />
              <input type="text" className="input w-60" placeholder="Country" />
            </div>
            <input type="email" className="input  w-80 sm:w-122" placeholder="Phone" />
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
              onClick={() => navigate("/order")}
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
