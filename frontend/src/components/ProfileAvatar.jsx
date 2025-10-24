import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { icons } from "../assets/assets.js";
import { StoreContext } from "../context/StoreContext.jsx";

const ProfileAvatar = () => {
  const { url, setIsAuthenticated } = useContext(StoreContext);

  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Ref to the dropdown container to detect outside clicks
  const dropdownRef = useRef(null);

  // Toggles the dropdown menu's visibility.

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handles clicks outside of the dropdown menu to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        `${url}/api/user/signout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success("Signed out");
        setIsAuthenticated(false);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // toast.error(error.response.data.message);
        console.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.error(error);
    }
  };

  // Effect to add and remove the event listener for outside clicks
  useEffect(() => {
    // Add event listener when the component mounts and dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect only when `isOpen` changes

  return (
    <div className="">
      {/* Container for the dropdown. `ref` is attached here. */}
      <div className="relative" ref={dropdownRef}>
        {/* The avatar button that triggers the dropdown */}
        <button
          onClick={toggleDropdown}
          className="btn btn-circle btn-ghost"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <img width={30} src={icons.avatar} alt="" />
        </button>

        {/* The dropdown menu, conditionally rendered with a smooth transition */}
        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-4 w-30 origin-top-right rounded-md bg-primary py-1 shadow-2xl focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            {/* Menu items */}
            <button
              href="#"
              className="block px-4 py-2 text-xs font-medium cursor-pointer w-11/12 mx-auto hover:bg-white/10 rounded-lg"
              role="menuitem"
              tabIndex="-1"
              onClick={handleSignOut}
            >
              Sign Out
            </button>

            <button
              href="#"
              className="block px-4 py-2 text-xs font-medium cursor-pointer w-11/12 mx-auto hover:bg-white/10 rounded-lg"
              role="menuitem"
              tabIndex="-1"
              onClick={() => navigate("/myorders")}
            >
              Orders
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
