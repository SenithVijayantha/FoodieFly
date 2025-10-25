import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";

import ThemeToggler from "./ThemeToggler";
import { StoreContext } from "../context/StoreContext";
import ProfileAvatar from "./ProfileAvatar.jsx";

const Navbar = () => {
  const { cartItemsCount, isAuthenticated } = useContext(StoreContext);

  return (
    <div className="max-w-[1920px] sticky top-0 z-10 navbar bg-primary/60 backdrop-blur-md shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-10 mt-6 w-52 p-2 shadow-lg bg-primary "
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#mobile-app">Mobile App</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          FoodieFly
        </Link>
      </div>
      <div className="navbar-end sm:gap-2">
        <Link to="/cart" className="indicator btn btn-ghost btn-circle">
          <ShoppingCart />
          {cartItemsCount > 0 ? (
            <span className="badge badge-sm indicator-item">
              {cartItemsCount}
            </span>
          ) : (
            <></>
          )}
        </Link>
        {/* <ThemeToggler /> */}
        {!isAuthenticated ? (
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn btn-outline"
          >
            Sign in
          </button>
        ) : (
          <ProfileAvatar />
        )}
      </div>
    </div>
  );
};

export default Navbar;
