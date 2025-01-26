import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/TopNav";
import Index from "./pages/Index";
import JourneyDetail from "./pages/JourneyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SidebarProvider>
        <div className="flex flex-col min-h-screen">
          <div className="fixed top-0 left-0 right-0 z-50">
            <TopNav />
          </div>
          <div className="flex-1 flex mt-16">
            <aside className="w-64 bg-background h-[90%] self-end">
              <AppSidebar />
            </aside>
            <main className="flex-1 p-8">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/journey/:id" element={<JourneyDetail />} />
                </Routes>
              </BrowserRouter>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;