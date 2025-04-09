
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-luxe-dark text-white">
      <div 
        className="min-h-screen flex flex-col justify-center items-center p-8 bg-center bg-cover"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.8)), url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1440&q=80)' 
        }}
      >
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center">
            <span className="text-luxe-gold">Dominic</span>
          </h1>
          
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 max-w-md">
            Exclusive services for discerning individuals.
          </p>
        </div>
        
        <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <Link to="/welcome" className="flex items-center text-white/80 hover:text-white">
            <span className="mr-2">Explore Our Services</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      
      <div className="py-8 px-6 bg-black text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Dominic. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
