
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Calendar, MessageSquare, Menu } from 'lucide-react';

const MobileNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/dashboard" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/dashboard') ? 'text-luxe-blue' : 'text-gray-500'}`}
        >
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/requests" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/requests') ? 'text-luxe-blue' : 'text-gray-500'}`}
        >
          <Calendar size={22} />
          <span className="text-xs mt-1">Requests</span>
        </Link>
        
        <Link 
          to="/chat" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/chat') ? 'text-luxe-blue' : 'text-gray-500'}`}
        >
          <MessageSquare size={22} />
          <span className="text-xs mt-1">Chat</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/profile') ? 'text-luxe-blue' : 'text-gray-500'}`}
        >
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        
        <Link 
          to="/menu" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/menu') ? 'text-luxe-blue' : 'text-gray-500'}`}
        >
          <Menu size={22} />
          <span className="text-xs mt-1">Menu</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
