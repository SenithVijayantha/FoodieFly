import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodCard from "./FoodCard";

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const { foodList } = useContext(StoreContext);

  const items = foodList.filter(
    (item) => category === "All" || category === item.category
  );

  return (
    <section className="wrap py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {category === "All" ? "Dishes near you" : category}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {items.length} {items.length === 1 ? "dish" : "dishes"}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
          {foodList.length === 0
            ? "Dishes will appear here once the menu loads."
            : `No dishes in ${category} yet.`}
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <FoodCard
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FoodDisplay;
