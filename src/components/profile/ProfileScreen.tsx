
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CreditCard, ShieldCheck, Bell, HelpCircle, LogOut } from 'lucide-react';

const ProfileScreen = () => {
  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12 pb-20">
        <h1 className="text-2xl font-serif font-semibold mb-6">Your Profile</h1>
        
        <div className="flex items-center">
          <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-serif text-luxe-dark">
            A
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-medium">Alexander Thompson</h2>
            <p className="text-luxe-gold text-sm">Platinum Member Since 2020</p>
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
              <span className="font-serif text-luxe-gold text-xl font-semibold">Platinum</span>
              <span className="text-sm text-gray-500 ml-2">3 Years</span>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
              <div className="bg-luxe-gold h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Current: 800 pts</span>
              <span>Black Tier: 1,000 pts</span>
            </div>
          </div>
          
          <div className="flex justify-between p-4">
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">12</div>
              <div className="text-xs text-gray-500">Requests Made</div>
            </Link>
            <div className="w-px bg-gray-100"></div>
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">4</div>
              <div className="text-xs text-gray-500">Events Attended</div>
            </Link>
            <div className="w-px bg-gray-100"></div>
            <Link to="/membership-details" className="text-center flex-1 hover:bg-gray-50 py-2 rounded">
              <div className="font-medium mb-1">3</div>
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
            
            <Link to="/" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg text-red-500">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mr-3">
                  <LogOut size={18} />
                </div>
                <span>Log Out</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
