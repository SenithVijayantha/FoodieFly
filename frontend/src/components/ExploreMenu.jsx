import React from "react";

import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div id="menu" className="flex md:justify-center gap-3 overflow-x-scroll py-5 px-5 no-scrollbar">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 flex flex-col items-center gap-2 hover:scale-110 transition-transform ease-in-out"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              className={`w-30 h-30 rounded-lg object-cover ${
                category === item.menu_name ? "border-4 border-primary" : ""
              }`}
              src={item.menu_image}
              alt=""
            />
            <p
              className={
                category === item.menu_name
                  ? "text-primary font-semibold"
                  : "text-slate-300"
              }
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default ExploreMenu;
