
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PaymentMethods = () => {
  const cards = [
    {
      id: 1,
      type: 'Visa',
      lastFour: '4567',
      expiryDate: '09/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      lastFour: '8901',
      expiryDate: '11/24',
      isDefault: false
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-luxe-dark text-white p-6 pt-12">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-3">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-serif font-semibold">Payment Methods</h1>
        </div>
      </div>
      
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif font-semibold">Saved Cards</h2>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Plus size={16} />
            Add New
          </Button>
        </div>
        
        <div className="space-y-4">
          {cards.map(card => (
            <div 
              key={card.id} 
              className={`luxe-card p-4 ${card.isDefault ? 'border-2 border-luxe-blue' : ''}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center mr-4">
                    <CreditCard size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {card.type} •••• {card.lastFour}
                    </p>
                    <p className="text-sm text-gray-500">Expires {card.expiryDate}</p>
                  </div>
                </div>
                {card.isDefault && (
                  <span className="text-xs bg-blue-50 text-luxe-blue px-2 py-1 rounded">Default</span>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-4 text-sm">
                <button className="text-gray-600 hover:text-luxe-blue">Edit</button>
                {!card.isDefault && (
                  <button className="text-gray-600 hover:text-luxe-blue">Set as default</button>
                )}
                {!card.isDefault && (
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Billing Address</h3>
          <div className="luxe-card p-4">
            <p>Alexander Walker</p>
            <p className="text-gray-600">
              123 Luxury Avenue<br />
              Beverly Hills, CA 90210<br />
              United States
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm text-luxe-blue hover:underline">
                Edit Billing Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
