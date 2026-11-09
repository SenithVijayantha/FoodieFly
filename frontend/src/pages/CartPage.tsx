import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StoreContext } from "../context/StoreContext";

const CartPage = () => {
  const {
    cartItems,
    foodList,
    addToCart,
    removeFromCart,
    getTotalCartItemsPrice,
    cartItemsCount,
    deliveryFee,
    url,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const items = foodList.filter((item) => cartItems[item._id] > 0);
  const subtotal = getTotalCartItemsPrice();

  if (items.length === 0) {
    return (
      <section className="wrap py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Add a dish from the menu to get started.</p>
        <Link to="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
          Browse the menu
        </Link>
      </section>
    );
  }

  return (
    <section className="wrap py-10 md:py-14">
      <h1 className="text-4xl font-semibold sm:text-5xl">Your cart</h1>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src={`${url}/images/${item.image}`}
                          alt={item.name}
                          className="size-16 shrink-0 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="outline"
                          size="icon-sm"
                          aria-label={`Remove one ${item.name}`}
                          onClick={() => removeFromCart(item._id)}
                        >
                          <Minus />
                        </Button>
                        <span className="min-w-8 text-center font-semibold">
                          {cartItems[item._id]}
                        </span>
                        <Button
                          variant="outline"
                          size="icon-sm"
                          aria-label={`Add one ${item.name}`}
                          onClick={() => addToCart(item._id)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      ${cartItems[item._id] * item.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <aside className="grid gap-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <dl className="grid gap-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>${subtotal}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery fee</dt>
              <dd>${deliveryFee}</dd>
            </div>
            <Separator />
            <div className="flex justify-between text-base font-semibold">
              <dt>Total</dt>
              <dd>${subtotal + deliveryFee}</dd>
            </div>
          </dl>
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate("/order")}
            disabled={cartItemsCount === 0}
          >
            Checkout
          </Button>

          <div className="grid gap-2">
            <label htmlFor="promo" className="text-sm text-muted-foreground">
              Have a promo code?
            </label>
            <div className="flex gap-2">
              <Input id="promo" type="text" placeholder="Promo code" />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
