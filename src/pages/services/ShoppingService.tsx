
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Tag } from 'lucide-react';

const ShoppingService = () => {
  const shoppingServices = [
    {
      id: 1,
      title: 'Personal Stylist Consultation',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
      description: 'Connect with a top fashion stylist who will curate a personalized wardrobe based on your preferences and lifestyle.'
    },
    {
      id: 2,
      title: 'Limited Edition Product Access',
      category: 'Luxury Goods',
      image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=800&q=80',
      description: 'Gain early access to limited-edition releases from top luxury brands before they're available to the public.'
    },
    {
      id: 3,
      title: 'Luxury Home Decor Consultation',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      description: 'Work with renowned interior designers to source exclusive home decor pieces and furnishings.'
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Personal Shopping</h1>
        </div>
        <p className="text-gray-300">Exclusive shopping services and product access for our members.</p>
      </div>
      
      <div className="px-6 mt-8">
        <h2 className="text-xl font-serif font-semibold mb-4">Shopping Services</h2>
        
        <div className="space-y-6">
          {shoppingServices.map(service => (
            <div key={service.id} className="luxe-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Tag size={14} className="mr-1" />
                  <span>{service.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link 
                  to={`/services/shopping/${service.id}`} 
                  className="block w-full bg-luxe-blue text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Request Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingService;
