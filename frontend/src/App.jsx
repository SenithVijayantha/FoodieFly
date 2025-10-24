import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import LoginForm from "./components/LoginForm";
import VerifyPayment from "./pages/VerifyPayment";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="max-w-[1920px] mx-auto min-h-screen">
        <LoginForm />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<PlaceOrderPage />} />
          <Route path="/verify" element={<VerifyPayment />} />
          <Route path="/myorders" element={<MyOrdersPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
