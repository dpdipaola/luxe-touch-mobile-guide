
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface RequestProps {
  request: {
    id: number;
    title: string;
    date: string;
    location: string;
    status: string;
    type: string;
    icon: React.ReactNode;
  };
}

const RequestCard = ({ request }: RequestProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-50 text-green-600';
      case 'pending':
        return 'bg-yellow-50 text-yellow-600';
      case 'in-progress':
        return 'bg-blue-50 text-blue-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'in-progress':
        return 'In Progress';
      default:
        return status;
    }
  };

  return (
    <Link to={`/requests/details/${request.id}`} className="luxe-card block">
      <div className="flex justify-between items-start mb-3">
        <div className="bg-luxe-blue/10 text-luxe-blue p-2 rounded-full">
          {request.icon}
        </div>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusColor(request.status)}`}>
          {getStatusText(request.status)}
        </span>
      </div>
      
      <h3 className="font-medium text-lg mb-2">{request.title}</h3>
      
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <span className="mr-4">{request.date}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-500">
        <MapPin size={14} className="mr-1" />
        <span>{request.location}</span>
      </div>
    </Link>
  );
};

export default RequestCard;
