import React, { useState } from "react";

const AddProductPage = () => {
  const [priceInputValue, setPriceInputValue] = useState("");

  const handlePriceInputChange = (e) => {
    const rawValue = e.target.value;

    const numericRegex = /^-?(\d*\.?\d*)$/;

    if (rawValue === "." || numericRegex.test(rawValue)) {
      setPriceInputValue(rawValue);
    }
  };

  return (
    <div className="pl-16">
      <form className="fieldset rounded-box p-4">
        <label className="label text-[16px]">Upload Image</label>
        <input type="file" className="file-input" />

        <label className="label text-[16px]">Product name</label>
        <input type="text" className="input" placeholder="Type here" />

        <label className="label text-[16px]">Product Description</label>
        <textarea
          className="textarea"
          placeholder="Write content here"
        ></textarea>

        <label className="label text-[16px]">Product Category</label>
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Pick a color</option>
          <option>Salad</option>
          <option>Beverages</option>
          <option>Desserts</option>
          <option>Starters</option>
          <option>Main Course</option>
          <option>Sides</option>
        </select>

        <label className="label text-[16px]">Product Price</label>
        <input
          type="number"
          class="input"
          placeholder="$32.00"
          value={priceInputValue}
          onChange={handlePriceInputChange}
        />

        <button className="btn btn-neutral mt-4 w-fit uppercase">Add</button>
      </form>
    </div>
  );
};

export default AddProductPage;
