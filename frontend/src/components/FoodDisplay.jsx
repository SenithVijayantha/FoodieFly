import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodCard from "./FoodCard";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-16">
        Top dishes near you
      </h2>
      <div
        className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 justify-center px-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, 336px)",
        }}
      >
        {food_list.map((item, index) => (
          <FoodCard
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
