import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  CirclePlus,
  ListChecks,
  Truck,
  SquareChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`fixed z-10 left-0 h-full bg-base-200 flex flex-col items-start transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-14"
      }`}
    >
      <ul className="menu w-full grow">
        <li>
          <Link
            className={!isSidebarOpen ? "tooltip tooltip-right" : ""}
            data-tip="Homepage"
            to={"/"}
          >
            <House width={18} />
            <span className={!isSidebarOpen ? "hidden" : ""}>Homepage</span>
          </Link>
        </li>
        <li>
          <Link
            className={!isSidebarOpen ? "tooltip tooltip-right" : ""}
            data-tip="Add Products"
            to={"/add"}
          >
            <CirclePlus width={18} />
            <span className={!isSidebarOpen ? "hidden" : ""}>Add Products</span>
          </Link>
        </li>
        <li>
          <Link
            className={!isSidebarOpen ? "tooltip tooltip-right" : ""}
            data-tip="List Products"
            to={"/list"}
          >
            <ListChecks width={18} />
            <span className={!isSidebarOpen ? "hidden" : ""}>List Products</span>
          </Link>
        </li>
        <li>
          <Link
            className={!isSidebarOpen ? "tooltip tooltip-right" : ""}
            data-tip="Orders"
            to={"/orders"}
          >
            <Truck width={18} />
            <span className={!isSidebarOpen ? "hidden" : ""}>Orders</span>
          </Link>
        </li>
      </ul>

      <div
        className={`m-2 ${!isSidebarOpen ? "tooltip tooltip-right" : ""}`}
        data-tip={isSidebarOpen ? "Close" : "Open"}
      >
        <button
          className={`btn btn-ghost btn-circle transition-transform duration-300 ${
            isSidebarOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <SquareChevronRight width={17}/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
