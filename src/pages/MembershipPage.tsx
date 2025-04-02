
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft } from 'lucide-react';
import MembershipOptions from '@/components/membership/MembershipOptions';

const MembershipPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard" className="flex items-center text-luxe-dark mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-semibold mb-4 text-luxe-dark">Join Dominic Membership</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome, {user?.email}. Become a member today to unlock a world of luxury services and exclusive benefits.
          </p>
        </div>

        <MembershipOptions />
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4">Why Join Dominic?</h3>
          <p className="text-lg text-gray-600">
            Our membership provides access to a network of luxury services, special privileges, and a dedicated team
            ready to fulfill your requests. Experience the difference that comes with being a Dominic member.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
