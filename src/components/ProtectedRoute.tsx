
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  const [hasMembership, setHasMembership] = useState<boolean | null>(null);
  const [checkingMembership, setCheckingMembership] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkMembership = async () => {
      if (user && location.pathname !== '/membership') {
        setCheckingMembership(true);
        try {
          // This is a simplified check - in a real app, you would check against a database
          // to verify the user has purchased a membership
          
          // For demo purposes, we'll check if the URL has a successful payment parameter
          const searchParams = new URLSearchParams(location.search);
          const paymentStatus = searchParams.get('payment');
          
          if (paymentStatus === 'success') {
            setHasMembership(true);
            toast({
              title: "Membership activated",
              description: "Thank you for your purchase! Your membership is now active.",
            });
          } else {
            // In a real implementation, you would check a members table in your database
            // For now, we'll just check a local storage flag as a demo
            const membershipStatus = localStorage.getItem(`membership_${user.id}`);
            setHasMembership(membershipStatus === 'active');
          }
        } catch (error) {
          console.error('Error checking membership:', error);
          setHasMembership(false);
        } finally {
          setCheckingMembership(false);
        }
      }
    };

    checkMembership();
  }, [user, location, toast]);

  // Store successful payment status in local storage
  useEffect(() => {
    if (user && location.search.includes('payment=success')) {
      localStorage.setItem(`membership_${user.id}`, 'active');
      setHasMembership(true);
      
      // Clear the URL parameters without refreshing the page
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [user, location.search]);

  // Show loading spinner while checking authentication state
  if (isLoading || (user && checkingMembership)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-luxe-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Redirect to login page if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to membership page if authenticated but no membership
  // Skip this redirect if already on the membership page
  if (hasMembership === false && location.pathname !== '/membership') {
    return <Navigate to="/membership" replace />;
  }

  // Allow access to protected routes if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
