
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import WelcomeScreen from "./components/onboarding/WelcomeScreen";
import LoginScreen from "./components/onboarding/LoginScreen";
import Dashboard from "./components/dashboard/Dashboard";
import ChatScreen from "./components/chat/ChatScreen";
import RequestsScreen from "./components/requests/RequestsScreen";
import ProfileScreen from "./components/profile/ProfileScreen";
import MenuScreen from "./components/menu/MenuScreen";
import NotFound from "./pages/NotFound";
import MembershipPage from "./pages/MembershipPage";

// Services Pages
import TravelService from "./pages/services/TravelService";
import EventsService from "./pages/services/EventsService";
import ShoppingService from "./pages/services/ShoppingService";

// Profile Pages
import PaymentMethods from "./pages/profile/PaymentMethods";
import AccountSettings from "./pages/profile/AccountSettings";

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
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/membership" element={<MembershipPage />} />
                <Route path="/requests" element={<RequestsScreen />} />
                <Route path="/chat" element={<ChatScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/menu" element={<MenuScreen />} />
                
                {/* Service Routes */}
                <Route path="/services/travel" element={<TravelService />} />
                <Route path="/services/events" element={<EventsService />} />
                <Route path="/services/shopping" element={<ShoppingService />} />
                
                {/* Profile Sub-Routes */}
                <Route path="/profile/payment" element={<PaymentMethods />} />
                <Route path="/profile/account" element={<AccountSettings />} />
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
