
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plane, Calendar, ShoppingBag, Utensils, Car, GlassWater, HomeIcon, Star } from 'lucide-react';
import ServiceCardComponent from './ServiceCardComponent';

const ServicesSection = () => {
  return (
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
            <ServiceCardComponent 
              icon={<Plane className="text-luxe-gold" size={32} />}
              title="Luxury Travel"
              description="From private jets to yacht charters, experience travel reimagined. Our travel concierge arranges bespoke itineraries to the world's most exclusive destinations."
              images={[
                "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
              ]}
            />
            
            <ServiceCardComponent 
              icon={<Calendar className="text-luxe-gold" size={32} />}
              title="Exclusive Events"
              description="Gain access to the most coveted events worldwide. From front-row fashion shows to VIP sporting events and sold-out concerts, we secure the impossible."
              images={[
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80"
              ]}
              reverse
            />
            
            <ServiceCardComponent 
              icon={<ShoppingBag className="text-luxe-gold" size={32} />}
              title="Personal Shopping"
              description="Your personal shopper will source rare luxury items, limited editions, and custom pieces from top designers. Enjoy private shopping experiences at prestigious boutiques worldwide."
              images={[
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=600&q=80"
              ]}
            />
            
            <ServiceCardComponent 
              icon={<Utensils className="text-luxe-gold" size={32} />}
              title="Fine Dining"
              description="Secure reservations at the world's most exclusive restaurants. From Michelin-starred establishments to hidden culinary gems, experience extraordinary gastronomy with special chef's table arrangements."
              images={[
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80"
              ]}
              reverse
            />
            
            <ServiceCardComponent 
              icon={<Car className="text-luxe-gold" size={32} />}
              title="Luxury Vehicles"
              description="Access the finest luxury and exotic vehicles worldwide. From chauffeur services in premium sedans to rentals of the latest supercars, we arrange every automotive need with precision."
              images={[
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80"
              ]}
            />
            
            <ServiceCardComponent 
              icon={<GlassWater className="text-luxe-gold" size={32} />}
              title="Wellness & Spa"
              description="Indulge in exclusive wellness retreats and spa experiences. We arrange appointments with renowned wellness practitioners, premium spa treatments, and personalized fitness services."
              images={[
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
              ]}
              reverse
            />
            
            <ServiceCardComponent 
              icon={<HomeIcon className="text-luxe-gold" size={32} />}
              title="Luxury Properties"
              description="Discover extraordinary accommodations worldwide. From penthouses to private islands, we provide access to exclusive properties not available to the general public."
              images={[
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80"
              ]}
            />
            
            <ServiceCardComponent 
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
  );
};

export default ServicesSection;
