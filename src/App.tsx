import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TopNav } from "@/components/TopNav";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import JourneyDetail from "./pages/JourneyDetail";
import TestFlows from "./pages/TestFlows";
import PersonaDetail from "./pages/PersonaDetail";
import Settings from "./pages/Settings";
import TestFlowDetail from "./pages/TestFlowDetail";

const queryClient = new QueryClient();

const App = () => {
  const isLoginPage = window.location.pathname === '/login';

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <SidebarProvider>
            <div className="flex flex-col min-h-screen">
              {!isLoginPage && (
                <div className="fixed top-0 left-0 right-0 z-50">
                  <TopNav />
                </div>
              )}
              <div className="flex flex-1 pt-16">
                {!isLoginPage && (
                  <div className="fixed left-0 top-16 bottom-0">
                    <AppSidebar />
                  </div>
                )}
                <main className={`flex-1 ${!isLoginPage ? 'ml-[240px] p-8' : ''}`}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Index />} />
                    <Route path="/journey/:id" element={<JourneyDetail />} />
                    <Route path="/test-flows" element={<TestFlows />} />
                    <Route path="/test-flows/:id" element={<TestFlowDetail />} />
                    <Route path="/persona/:id" element={<PersonaDetail />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;