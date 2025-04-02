
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, ArrowRight, MapPin, Calendar, ShoppingBag, Phone } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';

interface ProfileData {
  first_name: string | null;
  last_name: string | null;
  membership_level: string | null;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name, membership_level')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const services = [
    { id: 1, icon: <MapPin size={24} />, title: 'Travel Experience', path: '/services/travel' },
    { id: 2, icon: <Calendar size={24} />, title: 'Event Access', path: '/services/events' },
    { id: 3, icon: <ShoppingBag size={24} />, title: 'Personal Shopping', path: '/services/shopping' },
  ];

  const userName = profile?.first_name || user?.email?.split('@')[0] || 'Member';
  const membershipLevel = profile?.membership_level || 'Premium';

  const handleDirectRequest = () => {
    // Forward to SMS or call functionality
    const phoneNumber = "7787899874";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-luxe-dark text-white p-6 pt-12 rounded-b-3xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-gray-300">Good day,</p>
            <h1 className="text-2xl font-serif font-semibold">{userName}</h1>
            <p className="text-luxe-gold text-sm">{membershipLevel} Member</p>
          </div>
          <div className="flex space-x-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
              <Bell size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
              <Search size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-luxe-blue to-blue-600 rounded-xl p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100 text-sm">Direct contact</p>
              <p className="font-medium">Need assistance? Contact us directly</p>
            </div>
            <Button 
              onClick={handleDirectRequest}
              className="bg-white rounded-lg px-4 py-2 text-luxe-blue font-medium text-sm flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick Services */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-serif font-semibold">Our Services</h2>
          <Link to="/services" className="text-luxe-blue text-sm flex items-center">
            View All
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {services.map(service => (
            <ServiceCard key={service.id} icon={service.icon} title={service.title} path={service.path} />
          ))}
        </div>
      </div>
      
      {/* Make a Direct Request Section */}
      <div className="px-6 mt-8 pb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-serif font-semibold">Make a Direct Request</h2>
        </div>
        
        <div className="luxe-card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-luxe-blue/10 text-luxe-blue p-2 rounded-full">
              <Phone size={20} />
            </div>
          </div>
          
          <h3 className="font-medium text-lg mb-1">Contact Your Personal Concierge</h3>
          <p className="text-gray-600 text-sm mb-4">Our team is available 24/7 to assist you with any requests.</p>
          
          <p className="text-gray-500 text-sm mb-4">
            Contact us directly at: <span className="font-medium">778-789-9874</span>
          </p>
          
          <Button 
            onClick={handleDirectRequest}
            className="w-full bg-luxe-blue text-white py-3 rounded-lg font-medium"
          >
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
