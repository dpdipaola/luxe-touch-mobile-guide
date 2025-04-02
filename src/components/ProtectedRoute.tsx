
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
      if (user) {
        setCheckingMembership(true);
        try {
          // Check if the URL has a successful payment parameter
          const searchParams = new URLSearchParams(location.search);
          const paymentStatus = searchParams.get('payment');
          
          if (paymentStatus === 'success') {
            setHasMembership(true);
            localStorage.setItem(`membership_${user.id}`, 'active');
            toast({
              title: "Membership activated",
              description: "Thank you for your purchase! Your membership is now active.",
            });
          } else {
            // Check localStorage for membership status
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

  // Always redirect to membership page if user has no membership
  // and they're trying to access any protected route (except membership page)
  if (hasMembership === false && location.pathname !== '/membership') {
    return <Navigate to="/membership" replace />;
  }

  // Allow access to protected routes if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
