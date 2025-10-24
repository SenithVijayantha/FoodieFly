import React, { useContext, useState } from "react";
import axios from "axios";
import { Package, Dot } from "lucide-react";

import { StoreContext } from "../context/StoreContext";
import { useEffect } from "react";

const MyOrdersPage = () => {
  const { url } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/myorders`,
      {},
      { withCredentials: true }
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold m-4">My Orders</h3>
      <div className="w-full overflow-x-auto">
        <table className="table my-4  min-w-[700px]">
          <tbody className="">
            {data.map((order, index) => (
              <tr key={index}>
                <td className="w-[2rem]">
                  <div className="flex justify-between bg-accent/70 p-1 rounded-md w-fit">
                    <Package width={20} height={20} />
                  </div>
                </td>
                <td className="">
                  {order.items.map((item, i) => {
                    return (
                      <span key={i}>
                        {item.name} x {item.quantity}
                        {i !== order.items.length - 1 && ", "}
                      </span>
                    );
                  })}
                </td>
                <td className="">
                  <div className="flex justify-between font-semibold">
                    <span>${order.amount}</span>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-between">
                    <span>items: {order.items.length}</span>
                  </div>
                </td>
                <td className="">
                  <div className="flex  font-semibold">
                    <span className="flex items-center py-2 text-accent uppercase text-xs">
                      {order.status}
                    </span>
                  </div>
                </td>
                <td className="">
                  <button
                    className="btn btn-outline btn-sm btn-accent"
                    onClick={fetchOrders}
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
