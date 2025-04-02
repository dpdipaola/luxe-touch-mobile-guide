
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, CreditCard, Bell, HelpCircle, Gift, Star, Shield, FileText } from 'lucide-react';

const MenuScreen = () => {
  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Menu</h1>
        </div>
      </div>
      
      <div className="px-6 py-6">
        <div className="luxe-card mb-6">
          <h3 className="font-medium mb-4">Account</h3>
          
          <div className="space-y-1">
            <Link to="/profile" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Settings size={18} />
                </div>
                <span>Profile Settings</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <CreditCard size={18} />
                </div>
                <span>Payment Methods</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Bell size={18} />
                </div>
                <span>Notifications</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
          </div>
        </div>
        
        <div className="luxe-card mb-6">
          <h3 className="font-medium mb-4">Services</h3>
          
          <div className="space-y-1">
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Gift size={18} />
                </div>
                <span>Exclusive Offers</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Star size={18} />
                </div>
                <span>Membership Benefits</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
          </div>
        </div>
        
        <div className="luxe-card">
          <h3 className="font-medium mb-4">Support</h3>
          
          <div className="space-y-1">
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <HelpCircle size={18} />
                </div>
                <span>Help Center</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <Shield size={18} />
                </div>
                <span>Privacy & Security</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
            
            <Link to="/dashboard" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <FileText size={18} />
                </div>
                <span>Terms of Service</span>
              </div>
              <div className="text-gray-400">›</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
