
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Shield } from 'lucide-react';
import MembershipOptions from '@/components/membership/MembershipOptions';

const MembershipPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Check if user already has active membership
  const hasMembership = user ? localStorage.getItem(`membership_${user.id}`) === 'active' : false;

  // If user has a membership and lands on this page, redirect them to dashboard
  useEffect(() => {
    if (hasMembership) {
      navigate('/dashboard');
    }
  }, [hasMembership, navigate]);

  // If redirecting, show a loading state
  if (hasMembership) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-luxe-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard" className="flex items-center text-luxe-dark mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Shield size={40} className="text-luxe-blue" />
          </div>
          <h1 className="text-4xl font-serif font-semibold mb-4 text-luxe-dark">
            Join Dominic Exclusive Membership
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome, {user?.email}. Become a member today to unlock a world of unparalleled luxury services and exclusive benefits.
          </p>
        </div>

        <MembershipOptions />
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4">Experience Absolute Luxury with Dominic</h3>
          <p className="text-lg text-gray-600">
            Our $1,000 monthly membership provides access to an elite network of luxury services, unrivaled privileges, and a dedicated team
            of experts ready to fulfill your most ambitious requests. Experience the difference that comes with being a Dominic member.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-serif font-medium text-lg mb-2">Exclusive Access</h4>
              <p className="text-gray-600">Gain privileged access to events, venues, and experiences completely unavailable to the general public.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-serif font-medium text-lg mb-2">Personalized Service</h4>
              <p className="text-gray-600">Benefit from our elite team who understands your preferences and anticipates your needs before you even express them.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-serif font-medium text-lg mb-2">Global Reach</h4>
              <p className="text-gray-600">Enjoy our premium services whether you're at home or traveling around the world, with 24/7 concierge support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
