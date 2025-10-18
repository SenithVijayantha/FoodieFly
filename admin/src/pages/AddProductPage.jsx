import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProductPage = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const handleProductDetails = (e) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePriceInputChange = (e) => {
    const rawValue = e.target.value;

    const numericRegex = /^-?(\d*\.?\d*)$/;

    if (
      rawValue === "" ||
      rawValue === "." ||
      rawValue === "-" ||
      numericRegex.test(rawValue)
    ) {
      // ONLY call the setter function if the input is valid
      handleProductDetails(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("description", productDetails.description);
    formData.append("price", productDetails.price);
    formData.append("category", productDetails.category);
    formData.append("image", image);
    // console.log(productDetails);

    try {
      const response = await axios.post(`${backendUrl}/api/food/add`, formData);

      if (response.data.success) {
        setProductDetails({
          name: "",
          description: "",
          price: "",
          category: "",
        });
        setImage(null);
        // Reset the file input visually
        e.target.reset();
        toast.success("Product added successfully!");
      } else {
        console.error("API Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to submit form:", error.response ? error.response.data : error.message);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="pl-16">
      <form className="fieldset rounded-box p-4" onSubmit={handleSubmit}>
        <label className="label text-[16px]">Upload Image</label>
        <input
          type="file"
          className="file-input"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label className="label text-[16px]">Product name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Type here"
          onChange={handleProductDetails}
          value={productDetails.name}
          required
        />

        <label className="label text-[16px]">Product Description</label>
        <textarea
          name="description"
          className="textarea"
          placeholder="Write content here"
          value={productDetails.description}
          onChange={handleProductDetails}
          required
        ></textarea>

        <label className="label text-[16px]">Product Category</label>
        <select
          defaultValue="Pick a color"
          className="select"
          name="category"
          onChange={handleProductDetails}
          required
        >
          <option disabled={true}>Pick a category</option>
          <option value="Salad">Salad</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
          <option value="Starters">Starters</option>
          <option value="Main Course">Main Course</option>
          <option value="Sides">Sides</option>
        </select>

        <label className="label text-[16px]">Product Price</label>
        <input
          type="text"
          className="input"
          name="price"
          placeholder="$32.00"
          value={productDetails.price}
          onChange={handlePriceInputChange}
          required
        />

        <button className="btn btn-neutral mt-4 w-fit uppercase">Add</button>
      </form>
    </div>
  );
};

export default AddProductPage;
