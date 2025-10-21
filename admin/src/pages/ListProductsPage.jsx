import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { X } from "lucide-react";

const ListProductsPage = ({ backendUrl }) => {
  const [foodList, setFoodList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/food/list`);
      console.log(response.data.data);

      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        console.error("API Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Failed to fetch data:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to fetch data. Please try again.");
    }
  };

  const removeFoodItem = async (foodItemId) => {
    const response = await axios.delete(`${backendUrl}/api/food/remove`, {
      data: { id: foodItemId },
    });
    await fetchList(); // trigger an UI update
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="overflow-x-auto pl-16">
      {foodList.length !== 0 ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>
                    <img
                      className="w-30 h-20 object-cover rounded-lg mx-auto"
                      src={`${backendUrl}/images/${item.image}`}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-circle btn-primary btn-outline btn-xs"
                      onClick={() => removeFoodItem(item._id)}
                    >
                      <X width={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-base-300 rounded-md p-5">
            Please add one or more items to view!
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProductsPage;
