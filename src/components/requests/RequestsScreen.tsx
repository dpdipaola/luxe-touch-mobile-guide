
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Filter, Calendar, MapPin, ShoppingBag, Clock } from 'lucide-react';
import RequestCard from './RequestCard';

const RequestsScreen = () => {
  const [filter, setFilter] = useState('all');
  
  const requests = [
    {
      id: 1,
      title: 'VIP Formula 1 Grand Prix Access',
      date: 'May 26-28, 2023',
      location: 'Monaco',
      status: 'confirmed',
      type: 'event',
      icon: <Calendar size={18} />
    },
    {
      id: 2,
      title: 'Luxury Villa Booking',
      date: 'July 15-22, 2023',
      location: 'Amalfi Coast, Italy',
      status: 'pending',
      type: 'travel',
      icon: <MapPin size={18} />
    },
    {
      id: 3,
      title: 'Limited Edition Watch Procurement',
      date: 'Processing',
      location: 'Switzerland',
      status: 'in-progress',
      type: 'shopping',
      icon: <ShoppingBag size={18} />
    },
    {
      id: 4,
      title: 'Michelin Star Restaurant Reservation',
      date: 'June 10, 2023',
      location: 'Paris, France',
      status: 'confirmed',
      type: 'dining',
      icon: <Clock size={18} />
    }
  ];
  
  const filteredRequests = filter === 'all' ? requests : requests.filter(req => req.status === filter);

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Your Requests</h1>
          <Link 
            to="/create-request" 
            className="w-10 h-10 bg-luxe-blue rounded-full flex items-center justify-center shadow-lg"
          >
            <Plus size={20} />
          </Link>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2 -mx-2 px-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
              filter === 'all' 
                ? 'bg-white text-luxe-dark font-medium' 
                : 'bg-white/20 text-white'
            }`}
          >
            All Requests
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
              filter === 'confirmed' 
                ? 'bg-white text-luxe-dark font-medium' 
                : 'bg-white/20 text-white'
            }`}
          >
            Confirmed
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
              filter === 'pending' 
                ? 'bg-white text-luxe-dark font-medium' 
                : 'bg-white/20 text-white'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
              filter === 'in-progress' 
                ? 'bg-white text-luxe-dark font-medium' 
                : 'bg-white/20 text-white'
            }`}
          >
            In Progress
          </button>
        </div>
      </div>
      
      {/* Requests List */}
      <div className="px-6 py-6 space-y-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map(request => (
            <RequestCard key={request.id} request={request} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No requests found.</p>
            <Link to="/create-request" className="text-luxe-blue font-medium mt-2 block">
              Create a new request
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestsScreen;
