
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Phone, Menu, Info } from 'lucide-react';

const MobileNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'tel:7787899874';
  };

  const goToWelcome = () => {
    navigate('/');
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
        
        <a 
          href="tel:7787899874" 
          onClick={handleCallClick}
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
        >
          <Phone size={22} />
          <span className="text-xs mt-1">Call</span>
        </a>
        
        <button 
          onClick={goToWelcome}
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
        >
          <Info size={22} />
          <span className="text-xs mt-1">About</span>
        </button>
        
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
