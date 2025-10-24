import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Package } from "lucide-react";

const OrdersPage = ({ backendUrl }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/order/list`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching order list");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="pl-16">
      <h3 className="text-2xl font-semibold p-4">My Orders</h3>
      <div className="w-full overflow-x-auto">
        <table className="table my-4 ">
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <div className="w-md">
                    <div className="flex flex-col gap-4">
                      <div className="font-semibold flex gap-2 mb-6">
                        <div className="flex justify-between bg-accent/70 p-1 rounded-md w-fit">
                          <Package width={20} height={20} />
                        </div>
                        {order.items.map((item, i) => {
                          return (
                            <span key={i}>
                              {item.name} x {item.quantity}
                              {i !== order.items.length - 1 && ", "}
                            </span>
                          );
                        })}
                      </div>
                      <div className="w-xs">
                        <table className="table bg-base-200">
                          <tbody>
                            <tr>
                              <th>
                                <span className="font-semibold">Full Name</span>
                              </th>
                              <td>
                                {order.address.firstName}{" "}
                                {order.address.lastName}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="font-semibold">Address</span>
                              </th>
                              <td>
                                {order.address.street},{order.address.city},
                                {order.address.state},{order.address.country},
                                lorem
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="font-semibold">Zip Code</span>
                              </th>
                              <td>{order.address.zipcode}</td>
                            </tr>
                            <tr>
                              <th>
                                <span className="font-semibold">
                                  Telephone No
                                </span>
                              </th>
                              <td>{order.address.phone}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 mt-8">
                    <div className="flex justify-between font-semibold">
                      <span>${order.amount}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="flex justify-between">
                      <span>items: {order.items.length}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="flex  font-semibold">
                      <select
                        defaultValue="Pick a color"
                        className="select text-accent uppercase text-xs w-fit"
                      >
                        <option disabled={true}>Status</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
