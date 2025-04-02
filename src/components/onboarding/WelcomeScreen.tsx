import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown, Plane, Calendar, ShoppingBag, Camera, Star, GlassWater, Utensils, Car, HomeIcon, Phone, Mail } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const WelcomeScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxe-dark text-white overflow-hidden">
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
      
      <div id="services-section" className="min-h-screen bg-gradient-to-b from-luxe-dark to-zinc-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Experience <span className="text-luxe-gold">Unparalleled</span> Luxury
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Welcome to Dominic, where your desires meet extraordinary service. 
              We partner with the world's most prestigious companies to offer bespoke experiences.
            </p>
          </div>
          
          <ScrollArea className="h-[70vh] pr-4 pb-8">
            <div className="space-y-12">
              <ServiceCard 
                icon={<Plane className="text-luxe-gold" size={32} />}
                title="Luxury Travel"
                description="From private jets to yacht charters, experience travel reimagined. Our travel concierge arranges bespoke itineraries to the world's most exclusive destinations."
                images={[
                  "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
                ]}
              />
              
              <ServiceCard 
                icon={<Calendar className="text-luxe-gold" size={32} />}
                title="Exclusive Events"
                description="Gain access to the most coveted events worldwide. From front-row fashion shows to VIP sporting events and sold-out concerts, we secure the impossible."
                images={[
                  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80"
                ]}
                reverse
              />
              
              <ServiceCard 
                icon={<ShoppingBag className="text-luxe-gold" size={32} />}
                title="Personal Shopping"
                description="Your personal shopper will source rare luxury items, limited editions, and custom pieces from top designers. Enjoy private shopping experiences at prestigious boutiques worldwide."
                images={[
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=600&q=80"
                ]}
              />
              
              <ServiceCard 
                icon={<Utensils className="text-luxe-gold" size={32} />}
                title="Fine Dining"
                description="Secure reservations at the world's most exclusive restaurants. From Michelin-starred establishments to hidden culinary gems, experience extraordinary gastronomy with special chef's table arrangements."
                images={[
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80"
                ]}
                reverse
              />
              
              <ServiceCard 
                icon={<Car className="text-luxe-gold" size={32} />}
                title="Luxury Vehicles"
                description="Access the finest luxury and exotic vehicles worldwide. From chauffeur services in premium sedans to rentals of the latest supercars, we arrange every automotive need with precision."
                images={[
                  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80"
                ]}
              />
              
              <ServiceCard 
                icon={<GlassWater className="text-luxe-gold" size={32} />}
                title="Wellness & Spa"
                description="Indulge in exclusive wellness retreats and spa experiences. We arrange appointments with renowned wellness practitioners, premium spa treatments, and personalized fitness services."
                images={[
                  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                ]}
                reverse
              />
              
              <ServiceCard 
                icon={<HomeIcon className="text-luxe-gold" size={32} />}
                title="Luxury Properties"
                description="Discover extraordinary accommodations worldwide. From penthouses to private islands, we provide access to exclusive properties not available to the general public."
                images={[
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80"
                ]}
              />
              
              <ServiceCard 
                icon={<Star className="text-luxe-gold" size={32} />}
                title="Lifestyle Management"
                description="Our dedicated lifestyle managers handle every aspect of your busy life. From household staff recruitment to gift sourcing and everyday arrangements, we provide comprehensive support."
                images={[
                  "https://images.unsplash.com/photo-1604014137588-669d3485c748?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
                ]}
                reverse
              />
            </div>
          </ScrollArea>
        </div>
      </div>
      
      <div className="py-12 px-6 bg-black text-center">
        <h3 className="text-2xl font-serif font-bold mb-6">Join Our Exclusive Membership</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Experience a world where your desires are met with unparalleled service and attention to detail.
          Dominic—your gateway to a world without limits.
        </p>
        <Link to="/login" className="luxe-button bg-luxe-gold text-black hover:bg-amber-400 inline-flex items-center">
          Become a Member
          <ChevronRight size={18} className="ml-2" />
        </Link>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-xl font-serif font-medium mb-4">Contact Us</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-luxe-gold" />
              <span className="text-gray-300">778-789-9874</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-luxe-gold" />
              <span className="text-gray-300">concierge@globalluxe.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
          <p className="mt-2">© {new Date().getFullYear()} Dominic. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  images,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 hover:border-luxe-gold/30 transition-all duration-300`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-2xl font-serif font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={img} 
              alt={`${title} image ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
