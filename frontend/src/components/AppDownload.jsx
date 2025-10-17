import React from "react";

import { icons } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      id="mobile-app"
      className="flex gap-10 flex-col items-center justify-center py-32"
    >
      <p className="text-2xl text-center">
        For better experience download <br />
        <span className="font-bold">FoodieFly</span> App
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <button className="btn bg-black py-8 rounded-lg hover:scale-105 transition-transform">
          <img width={40} src={icons.play_store} alt="play store icon" />
          <div className="flex flex-col text-start">
            <span>Get it on</span> <span className="text-xl">Google Play</span>
          </div>
        </button>
        <button className="btn bg-black py-8 rounded-lg hover:scale-105 transition-transform">
          <img width={40} src={icons.apple} alt="app store icon" />
          <div className="flex flex-col text-start">
            <span>Download it on</span>{" "}
            <span className="text-xl">App Store</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AppDownload;
