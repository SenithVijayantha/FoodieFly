import React from "react";

const Header = () => {
  return (
    <div id="home" className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md sm:max-w-3xl lg:max-w-7xl md:max-w-4xl">
          <h1 className="text-4xl sm:text-6xl sm:leading-none lg:text-9xl md:text-7xl md:tracking-light md:leading-none lg:leading-none lg:tracking-tight font-bold tracking-wide leading-12">
            Delicious Meals, Delivered Fast!
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
