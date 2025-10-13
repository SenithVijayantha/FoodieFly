import React from "react";

const Header = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold sm:text-5xl tracking-wide leading-12">
            Delicious Meals, Delivered Fast!
          </h1>
          <p className="py-6 px-12">
            Craving something tasty? Get your favorite dishes from local
            restaurants delivered straight to your door—fresh, hot, and on time.
          </p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
