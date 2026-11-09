import { useContext } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreContext } from "../context/StoreContext";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodCard = ({ id, name, price, description, image }: FoodCardProps) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const count = cartItems[id] ?? 0;

  return (
    <Card className="group gap-0 overflow-hidden rounded-2xl p-0 shadow-sm ring-0 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="photo-frame aspect-4/3">
        <img
          src={`${url}/images/${image}`}
          alt={name}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug font-semibold">{name}</h3>
          <span className="shrink-0 text-lg font-semibold text-primary">${price}</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-auto flex justify-end pt-4">
          {count > 0 ? (
            <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Remove one ${name}`}
                onClick={() => removeFromCart(id)}
              >
                <Minus />
              </Button>
              <span className="min-w-6 text-center font-semibold" aria-live="polite">
                {count}
              </span>
              <Button size="icon-sm" aria-label={`Add one ${name}`} onClick={() => addToCart(id)}>
                <Plus />
              </Button>
            </div>
          ) : (
            <Button onClick={() => addToCart(id)}>
              <Plus />
              Add
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FoodCard;
