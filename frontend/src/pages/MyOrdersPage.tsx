import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Package } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreContext } from "../context/StoreContext";

interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  items: OrderItem[];
  amount: number;
  status: string;
}

const MyOrdersPage = () => {
  const { url } = useContext(StoreContext);
  const [data, setData] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/myorders`,
        {},
        { withCredentials: true }
      );
      setData(response.data.data ?? []);
    } catch (error) {
      console.error(error);
      toast.error("Could not load your orders.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (data.length === 0) {
    return (
      <section className="wrap py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">No orders yet</h1>
        <p className="mt-3 text-muted-foreground">Your placed orders will show up here.</p>
        <Link to="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
          Browse the menu
        </Link>
      </section>
    );
  }

  return (
    <section className="wrap py-10 md:py-14">
      <h1 className="text-4xl font-semibold sm:text-5xl">My orders</h1>

      <ul className="mt-8 grid gap-4">
        {data.map((order, index) => (
          <li key={index}>
            <Card className="flex flex-col gap-4 rounded-2xl p-5 ring-0 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <Package />
                </div>
                <div className="grid gap-1">
                  <p className="font-semibold">
                    {order.items.map((item, i) => (
                      <span key={i}>
                        {item.name} × {item.quantity}
                        {i !== order.items.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {order.items.length} {order.items.length === 1 ? "item" : "items"} · ${order.amount}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="capitalize">
                  {order.status}
                </Badge>
                <Button variant="outline" size="sm" onClick={fetchOrders}>
                  Refresh status
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyOrdersPage;
