
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStripeCheckout } from '@/hooks/use-stripe-checkout';

const MembershipOptions = () => {
  const { initiateCheckout, isLoading } = useStripeCheckout();

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg border border-luxe-blue ring-2 ring-luxe-blue/20 transition-all hover:shadow-xl">
          <div className="p-6 text-center bg-luxe-blue text-white">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-white bg-opacity-20 bg-white rounded-full mb-2">
              Exclusive Membership
            </span>
            <h3 className="font-serif text-2xl font-bold">Dominic Luxury</h3>
            <div className="mt-4 flex justify-center items-end">
              <span className="text-4xl font-bold">$7,000/month</span>
            </div>
          </div>

          <div className="p-6 bg-white h-full flex flex-col">
            <p className="text-gray-600 mb-6 text-center">
              The ultimate luxury concierge experience with premium access to our exclusive services worldwide.
            </p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                'Dedicated personal concierge',
                'Priority restaurant reservations',
                'Luxury hotel bookings & upgrades',
                'Private jet & yacht charters',
                'Exclusive event access',
                'Celebrity chef experiences',
                'Personal shopping assistance',
                '24/7 global support'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-luxe-blue" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => initiateCheckout('premium')}
              disabled={isLoading}
              className="w-full bg-luxe-blue hover:bg-blue-700 text-white"
            >
              {isLoading ? 'Processing...' : 'Join Now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipOptions;
