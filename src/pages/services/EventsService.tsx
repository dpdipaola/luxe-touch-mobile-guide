
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

const EventsService = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Private Art Gallery Opening',
      date: 'June 15, 2023',
      location: 'New York City',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Be among the first to experience this exclusive exhibition featuring contemporary masterpieces from renowned artists around the world.'
    },
    {
      id: 2,
      title: 'Luxury Yacht Weekend',
      date: 'July 8-10, 2023',
      location: 'Monaco',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      description: 'Enjoy a weekend of relaxation and luxury aboard a private yacht. Includes gourmet dining and exclusive access to private beaches.'
    },
    {
      id: 3,
      title: 'Celebrity Chef Dinner',
      date: 'August 5, 2023',
      location: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      description: 'An intimate dinner experience prepared by a Michelin-starred chef with wine pairings and behind-the-scenes kitchen access.'
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Event Access</h1>
        </div>
        <p className="text-gray-300">Exclusive events and experiences curated for our members.</p>
      </div>
      
      <div className="px-6 mt-8">
        <h2 className="text-xl font-serif font-semibold mb-4">Upcoming Events</h2>
        
        <div className="space-y-6">
          {upcomingEvents.map(event => (
            <div key={event.id} className="luxe-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <Link 
                  to={`/services/events/${event.id}`} 
                  className="block w-full bg-luxe-blue text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Request Access
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsService;
