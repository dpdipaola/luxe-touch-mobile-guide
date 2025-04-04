
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import WelcomeScreen from "./components/onboarding/WelcomeScreen";
import LoginScreen from "./components/onboarding/LoginScreen";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import MembershipPage from "./pages/MembershipPage";

// Services Pages
import TravelService from "./pages/services/TravelService";
import EventsService from "./pages/services/EventsService";
import ShoppingService from "./pages/services/ShoppingService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/membership" element={<MembershipPage />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Service Routes */}
                <Route path="/services/travel" element={<TravelService />} />
                <Route path="/services/events" element={<EventsService />} />
                <Route path="/services/shopping" element={<ShoppingService />} />
              </Route>
            </Route>
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
