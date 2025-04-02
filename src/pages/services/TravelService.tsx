
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Globe } from 'lucide-react';

const TravelService = () => {
  const travelExperiences = [
    {
      id: 1,
      title: 'Private Island Retreat',
      location: 'Maldives',
      dates: 'Available Year-Round',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
      description: 'Experience ultimate luxury with a private island stay, complete with personal butler service and exclusive access to pristine beaches.'
    },
    {
      id: 2,
      title: 'Alpine Luxury Chalet',
      location: 'Swiss Alps',
      dates: 'December - March',
      image: 'https://images.unsplash.com/photo-1548877699-755d4d9a19af?auto=format&fit=crop&w=800&q=80',
      description: 'A stunning mountain retreat with ski-in/ski-out access, private chef, and breathtaking views of the Alps.'
    },
    {
      id: 3,
      title: 'African Safari Adventure',
      location: 'Serengeti, Tanzania',
      dates: 'June - October',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80',
      description: 'A luxurious safari experience with private guides, luxury tented accommodations, and exclusive wildlife viewing opportunities.'
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Travel Experiences</h1>
        </div>
        <p className="text-gray-300">Curated luxury travel experiences tailored to your preferences.</p>
      </div>
      
      <div className="px-6 mt-8">
        <h2 className="text-xl font-serif font-semibold mb-4">Featured Destinations</h2>
        
        <div className="space-y-6">
          {travelExperiences.map(experience => (
            <div key={experience.id} className="luxe-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{experience.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{experience.dates}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                <Link 
                  to={`/services/travel/${experience.id}`} 
                  className="block w-full bg-luxe-blue text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Experience
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelService;
