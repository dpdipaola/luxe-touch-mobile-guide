
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AccountSettings = () => {
  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Account Settings</h1>
        </div>
      </div>
      
      <div className="px-6 mt-8">
        <div className="luxe-card mb-6">
          <h3 className="font-medium mb-4">Personal Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 border-b border-gray-100">
              <User size={18} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Full Name</p>
                <p>Alexander Walker</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Edit
              </Button>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-100">
              <Mail size={18} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email Address</p>
                <p>alexander@example.com</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Edit
              </Button>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-100">
              <Phone size={18} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Edit
              </Button>
            </div>
            
            <div className="flex items-center p-3">
              <Globe size={18} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Location</p>
                <p>Los Angeles, United States</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Edit
              </Button>
            </div>
          </div>
        </div>
        
        <div className="luxe-card mb-6">
          <h3 className="font-medium mb-4">Security</h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 border-b border-gray-100">
              <Shield size={18} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <p>Password</p>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Change
              </Button>
            </div>
            
            <div className="flex items-center p-3">
              <div className="flex-1">
                <p>Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Enhance your account security</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600 text-sm font-medium">On</span>
                <Button variant="ghost" size="sm" className="text-luxe-blue">
                  Manage
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="luxe-card">
          <h3 className="font-medium mb-4">Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 border-b border-gray-100">
              <div className="flex-1">
                <p>Email Notifications</p>
                <p className="text-sm text-gray-500">Receive updates about your requests</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Manage
              </Button>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-100">
              <div className="flex-1">
                <p>Push Notifications</p>
                <p className="text-sm text-gray-500">Get alerts on your mobile device</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Manage
              </Button>
            </div>
            
            <div className="flex items-center p-3">
              <div className="flex-1">
                <p>Language</p>
                <p className="text-sm text-gray-500">English (US)</p>
              </div>
              <Button variant="ghost" size="sm" className="text-luxe-blue">
                Change
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
            Deactivate Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
