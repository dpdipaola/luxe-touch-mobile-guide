import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, CreditCard, ShieldCheck, Bell, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  membership_level: string;
}

const ProfileScreen = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        // Fix: Use type assertion to tell TypeScript this is a valid table
        const { data, error } = await supabase
          .from('profiles')
          .select('id, first_name, last_name, avatar_url, membership_level')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        setProfile(data);
      } catch (error: any) {
        console.error('Error fetching profile:', error);
        toast({
          title: 'Error',
          description: 'Failed to load profile data',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, toast]);

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to log out',
        variant: 'destructive',
      });
    }
  };

  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`;
    } else if (profile?.first_name) {
      return profile.first_name[0];
    } else if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  const getDisplayName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    } else if (profile?.first_name) {
      return profile.first_name;
    } else if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-luxe-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12 pb-20">
        <h1 className="text-2xl font-serif font-semibold mb-6">Your Profile</h1>
        
        <div className="flex items-center">
          <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-serif text-luxe-dark">
            {getInitials()}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-medium">{getDisplayName()}</h2>
            <p className="text-luxe-gold text-sm">
              {profile?.membership_level === 'standard' ? 'Standard' : profile?.membership_level} Member
            </p>
            <Link to="/profile/edit" className="text-sm text-blue-300 underline mt-1 inline-block">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      
      <div className="px-6 -mt-14">
        <div className="luxe-card mb-6">
          <div className="text-center p-4 border-b border-gray-100">
            <div className="font-semibold text-lg mb-1">Tier Status</div>
            <div className="mb-6">
              <span className="font-serif text-luxe-gold text-xl font-semibold">
                {profile?.membership_level === 'standard' ? 'Standard' : profile?.membership_level}
              </span>
              <span className="text-sm text-gray-500 ml-2">Member</span>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
              <div className="bg-luxe-gold h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Current: 200 pts</span>
              <span>Premium Tier: 1,000 pts</span>
            </div>
          </div>
          
          <div className="flex justify-between p-4">
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">0</div>
              <div className="text-xs text-gray-500">Requests Made</div>
            </Link>
            <div className="w-px bg-gray-100"></div>
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">0</div>
              <div className="text-xs text-gray-500">Events Attended</div>
            </Link>
            <div className="w-px bg-gray-100"></div>
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">0</div>
              <div className="text-xs text-gray-500">Countries Visited</div>
            </Link>
          </div>
        </div>
        
        <div className="luxe-card">
          <h3 className="font-medium mb-4">Settings</h3>
          
          <div className="space-y-1">
            <Link to="/profile/account" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Settings size={18} />
                </div>
                <span>Account Settings</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/profile/payment" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <CreditCard size={18} />
                </div>
                <span>Payment Methods</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/profile/privacy" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <ShieldCheck size={18} />
                </div>
                <span>Privacy & Security</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/profile/notifications" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Bell size={18} />
                </div>
                <span>Notifications</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/help" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <HelpCircle size={18} />
                </div>
                <span>Help & Support</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg text-red-500"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mr-3">
                  <LogOut size={18} />
                </div>
                <span>Log Out</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
