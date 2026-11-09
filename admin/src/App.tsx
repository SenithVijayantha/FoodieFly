import { Navigate, Route, Routes } from "react-router-dom";

import AppSidebar from "@/components/AppSidebar";
import AddProductPage from "@/pages/AddProductPage";
import ListProductsPage from "@/pages/ListProductsPage";
import OrdersPage from "@/pages/OrdersPage";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const App = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <main className="mx-auto w-full max-w-6xl flex-1 p-4 md:p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
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
          </main>
        </SidebarInset>
        <Toaster />
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default App;
