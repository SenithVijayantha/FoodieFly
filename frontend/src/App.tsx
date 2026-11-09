import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import VerifyPayment from "./pages/VerifyPayment";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <LoginForm open={loginOpen} onOpenChange={setLoginOpen} />
      <Navbar onSignIn={() => setLoginOpen(true)} />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<PlaceOrderPage />} />
          <Route path="/verify" element={<VerifyPayment />} />
          <Route path="/myorders" element={<MyOrdersPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
