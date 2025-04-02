
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const WelcomeScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to dashboard
  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-luxe-dark text-white">
      <div 
        className="flex-1 flex flex-col justify-center items-center p-8 bg-center bg-cover"
        style={{ backgroundImage: 'linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1440&q=80)' }}
      >
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Global <span className="text-luxe-gold">Luxe</span> Concierge
          </h1>
          
          <p className="text-lg text-center text-gray-300 mb-8 max-w-md">
            Exclusive, personalized services for discerning individuals across the globe.
          </p>
        </div>
        
        <div className="w-full max-w-md space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <Link to="/login" className="luxe-button bg-luxe-blue w-full flex items-center justify-center">
            <span>Member Login</span>
            <ChevronRight size={18} className="ml-2" />
          </Link>
          
          <Link to="/login" className="flex items-center justify-center w-full p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
            <span>Create Account</span>
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <div className="p-6 text-center text-sm text-gray-400">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
