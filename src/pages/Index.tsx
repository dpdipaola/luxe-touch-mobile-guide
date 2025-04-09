
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
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

      {/* Partners Section */}
      <div className="py-16 px-6 bg-gradient-to-b from-black to-luxe-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxe-gold">Trusted</span> Partners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We collaborate with the world's most prestigious brands to deliver exceptional experiences to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Partner logos - using placeholder grayscale logos with hover effect */}
            <PartnerLogo name="Luxury Hotels" image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Private Jets" image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Fine Dining" image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Luxury Retail" image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Event Management" image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Wellness Retreats" image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Luxury Vehicles" image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Art Galleries" image="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Exclusive Clubs" image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" />
            <PartnerLogo name="Yacht Charters" image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" />
          </div>
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

// Component for partner logos with hover effect
const PartnerLogo = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="h-20 w-full mb-2 relative overflow-hidden rounded-md bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
        <img 
          src={image} 
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
        <div className="absolute inset-0 border border-white/10 group-hover:border-luxe-gold/30 rounded-md transition-colors duration-300"></div>
      </div>
      <p className="text-xs text-gray-500 group-hover:text-luxe-gold transition-colors duration-300">{name}</p>
    </div>
  );
};

export default Index;
