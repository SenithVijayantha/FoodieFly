import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

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
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
