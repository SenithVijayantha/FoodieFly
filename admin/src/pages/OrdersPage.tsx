import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format";
import {
  isOrderStatus,
  ORDER_STATUSES,
  type ApiResponse,
  type Order,
  type PageProps,
} from "@/types";

const OrdersPage = ({ backendUrl }: PageProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get<ApiResponse<Order[]>>(
        `${backendUrl}/api/order/list`
      );

      if (response.data.success) {
        setOrders(response.data.data ?? []);
        // console.log(response.data.data);
      } else {
        toast.error("Error fetching order list");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrderStatusChange = async (
    orderId: string,
    status: string | null
  ) => {
    // console.log(orderId);
    if (!status || !isOrderStatus(status)) return;

    try {
      const response = await axios.post<ApiResponse>(
        `${backendUrl}/api/order/update-status`,
        {
          orderId,
          status,
        }
      );

      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update order status. Please try again.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const renderBody = () => {
    if (isLoading) {
      return Array.from({ length: 3 }, (_, index) => (
        <Card key={index}>
          <CardHeader>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      ));
    }

    return orders.map((order) => {
      const itemCount = order.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return (
        <Card key={order._id}>
          <CardHeader>
            <CardTitle className="font-mono text-sm">
              #{order._id.slice(-6).toUpperCase()}
            </CardTitle>
            <CardDescription>
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </CardDescription>
            <CardAction className="text-lg font-semibold tabular-nums">
              {formatPrice(order.amount)}
            </CardAction>
          </CardHeader>

          <CardContent className="grid gap-6 md:grid-cols-2">
            <section className="space-y-2">
              <h3 className="text-sm font-medium">Items</h3>
              <ul className="space-y-1.5 text-sm">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between gap-4">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground tabular-nums">
                      × {item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-medium">Delivery to</h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                <dt className="text-muted-foreground">Name</dt>
                <dd>
                  {order.address.firstName} {order.address.lastName}
                </dd>
                <dt className="text-muted-foreground">Address</dt>
                <dd>
                  {order.address.street}, {order.address.city},{" "}
                  {order.address.state}, {order.address.country}
                </dd>
                <dt className="text-muted-foreground">ZIP code</dt>
                <dd>{order.address.zipcode}</dd>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>{order.address.phone}</dd>
              </dl>
            </section>
          </CardContent>

          <CardFooter className="justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Select
              value={order.status}
              onValueChange={(value) =>
                handleOrderStatusChange(order._id, value)
              }
            >
              <SelectTrigger className="w-40" aria-label="Order status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ORDER_STATUSES.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardFooter>
        </Card>
      );
    });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        description={
          isLoading
            ? undefined
            : `${orders.length} ${orders.length === 1 ? "order" : "orders"}`
        }
      />

      {!isLoading && orders.length === 0 ? (
        <Card className="items-center py-12 text-center">
          <CardContent className="space-y-1">
            <p className="font-medium">No orders yet</p>
            <p className="text-sm text-muted-foreground">
              New orders from customers will appear here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">{renderBody()}</div>
      )}
    </div>
  );
};

export default OrdersPage;
