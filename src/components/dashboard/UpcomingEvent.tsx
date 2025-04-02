
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';

interface UpcomingEventProps {
  title: string;
  date: string;
  location: string;
  image: string;
}

const UpcomingEvent = ({ title, date, location, image }: UpcomingEventProps) => {
  return (
    <Link to="/events/details/1" className="flex items-center space-x-4 luxe-card">
      <div 
        className="h-16 w-16 rounded-xl bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      <div className="flex-1">
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar size={12} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={12} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingEvent;
