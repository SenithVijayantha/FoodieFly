import React, { useContext, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { StoreContext } from "../context/StoreContext";

const FoodCard = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="card bg-base-300 w-84 shadow-sm">
      <figure className="">
        <img src={image} alt="food" className=" w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        <p className="py-2">{description}</p>
        <div className="flex">
          <p className="text-primary font-bold text-2xl">${price}</p>
          {
            <div
              className={"flex flex-row-reverse items-center bg-primary/30 w-fit rounded-md"}
            >
              <div
                onClick={() => addToCart(id)}
                className="cursor-pointer bg-primary rounded-md p-1"
              >
                <Plus width={20} />{" "}
              </div>

              {cartItems[id] ? (
                <span className="text-lg font-semibold px-2">
                  {cartItems[id]}
                </span>
              ) : null}
              {cartItems[id] ? (
                <div
                  onClick={() => removeFromCart(id)}
                  className="cursor-pointer bg-primary rounded-md p-1"
                >
                  <Minus width={20} />
                </div>
              ) : null}
            </div>
          }
        </div>
        {/* <div className="card-actions">
          <button className="btn btn-primary btn-sm">Add to Cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default FoodCard;
