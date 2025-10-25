import React from "react";
import { header_bg } from "../assets/assets";

const Header = () => {
  return (
    <div id="home" className="relative min-h-screen">
      <img src={header_bg} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold animate-slide-up">
            Delicious Meals,
            <br /> Delivered Fast!
          </h1>
          <p className="py-6 px-12 max-w-md mx-auto">
            Craving something tasty? Get your favorite dishes from local
            restaurants delivered straight to your door—fresh, hot, and on time.
          </p>
          <button className="btn btn-primary btn-md">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
