import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "./components/Sidebar";
import AddProductPage from "./pages/AddProductPage";
import ListProductsPage from "./pages/ListProductsPage";
import OrdersPage from "./pages/OrdersPage";

const App = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div>
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route
          path="/add"
          element={<AddProductPage backendUrl={backendUrl} />}
        />
        <Route
          path="/list"
          element={<ListProductsPage backendUrl={backendUrl} />}
        />
        <Route
          path="/orders"
          element={<OrdersPage backendUrl={backendUrl} />}
        />
      </Routes>
    </div>
  );
};

export default App;
