
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";

// Pages
import WelcomeScreen from "./components/onboarding/WelcomeScreen";
import LoginScreen from "./components/onboarding/LoginScreen";
import Dashboard from "./components/dashboard/Dashboard";
import ChatScreen from "./components/chat/ChatScreen";
import RequestsScreen from "./components/requests/RequestsScreen";
import ProfileScreen from "./components/profile/ProfileScreen";
import MenuScreen from "./components/menu/MenuScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests" element={<RequestsScreen />} />
            <Route path="/chat" element={<ChatScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            {/* Redirect from index to dashboard */}
            <Route index element={<Dashboard />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
