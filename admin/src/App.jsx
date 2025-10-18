import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "./components/Sidebar";
import AddProductPage from "./pages/AddProductPage";
import ListProductsPage from "./pages/ListProductsPage";
import OrdersPage from "./pages/OrdersPage";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/list" element={<ListProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
};

export default App;
