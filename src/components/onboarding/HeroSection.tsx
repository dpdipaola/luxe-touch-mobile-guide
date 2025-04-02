
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToServices: () => void;
}

const HeroSection = ({ scrollToServices }: HeroSectionProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-center bg-cover"
      style={{ backgroundImage: 'linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.9)), url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1440&q=80)' }}
    >
      <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
          <span className="text-luxe-gold">Dominic</span>
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

      <Button 
        variant="ghost" 
        onClick={scrollToServices}
        className="mt-16 animate-fade-in opacity-0 flex flex-col items-center text-white/70 hover:text-white"
        style={{ animationDelay: '0.9s' }}
      >
        <span className="mb-2">Explore Our Services</span>
        <ChevronDown className="animate-bounce" />
      </Button>
    </div>
  );
};

export default HeroSection;
