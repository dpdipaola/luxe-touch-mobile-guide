
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

      {/* Partners Section - Updated Format */}
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
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* Partner logos - updated horizontal format with larger logos */}
            {partners.map((partner) => (
              <PartnerLogoCard 
                key={partner.name}
                name={partner.name} 
                image={partner.image}
                description={partner.description} 
              />
            ))}
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

// Updated partners list - removed Art Galleries, Fine Dining, and Wellness Retreats
const partners = [
  {
    name: "Luxury Hotels",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    description: "5-star accommodations worldwide"
  },
  {
    name: "Private Jets",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "Premium air travel solutions"
  },
  {
    name: "Luxury Retail",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description: "Exclusive shopping experiences"
  },
  {
    name: "Event Management",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    description: "Prestigious event planning"
  },
  {
    name: "Luxury Vehicles",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    description: "Premium automotive services"
  },
  {
    name: "Exclusive Clubs",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "Members-only access worldwide"
  },
  {
    name: "Yacht Charters",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    description: "Luxury maritime experiences"
  }
];

// Updated partner logo component with card format
const PartnerLogoCard = ({ name, image, description }) => {
  return (
    <div className="w-[280px] bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-luxe-gold/30 transition-all duration-300 group">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={`${name}`}
          className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-3 left-4 text-xl font-medium text-white group-hover:text-luxe-gold transition-colors duration-300">{name}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default Index;
