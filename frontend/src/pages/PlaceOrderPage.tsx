import { useState, useContext } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { StoreContext } from "../context/StoreContext";

type DeliveryInfo = Record<string, string>;

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", wide: true },
  { name: "street", label: "Street", type: "text", autoComplete: "street-address", wide: true },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
  { name: "state", label: "State / province", type: "text", autoComplete: "address-level1" },
  { name: "zipcode", label: "Zip code", type: "text", autoComplete: "postal-code" },
  { name: "country", label: "Country", type: "text", autoComplete: "country-name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", wide: true },
];

const PlaceOrderPage = () => {
  const {
    getTotalCartItemsPrice,
    deliveryFee,
    cartItemsCount,
    foodList,
    cartItems,
    url,
  } = useContext(StoreContext);

  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({});

  const handleDeliveryInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderItems = foodList
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({ ...item, quantity: cartItems[item._id] }));

    const orderData = {
      address: deliveryInfo,
      items: orderItems,
      amount: getTotalCartItemsPrice() + deliveryFee,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        withCredentials: true,
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const subtotal = getTotalCartItemsPrice();

  return (
    <section className="wrap py-10 md:py-14">
      <h1 className="text-4xl font-semibold sm:text-5xl">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_360px]"
      >
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Delivery information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className={`grid gap-2 ${field.wide ? "sm:col-span-2" : ""}`}>
                <Label htmlFor={`delivery-${field.name}`}>{field.label}</Label>
                <Input
                  id={`delivery-${field.name}`}
                  required
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  value={deliveryInfo[field.name] || ""}
                  onChange={handleDeliveryInfo}
                />
              </div>
            ))}
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
          <Button size="lg" className="w-full" disabled={cartItemsCount === 0} type="submit">
            Proceed to payment
          </Button>
        </aside>
      </form>
    </section>
  );
};

export default PlaceOrderPage;
