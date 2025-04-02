
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStripeCheckout } from '@/hooks/use-stripe-checkout';
import type { MembershipType } from '@/hooks/use-stripe-checkout';

type MembershipTier = {
  id: MembershipType;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const membershipTiers: MembershipTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '$7,000/month',
    description: 'Essential luxury concierge services for the discerning individual.',
    features: [
      'Personal concierge',
      'Restaurant reservations',
      'Hotel bookings',
      'Basic event access',
      '24/7 support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$7,000/month',
    description: 'Enhanced services with priority access to exclusive events.',
    features: [
      'All Standard features',
      'Priority concierge',
      'Luxury travel planning',
      'VIP event access',
      'Exclusive restaurant access',
      'Personal shopping assistance'
    ],
    highlighted: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$7,000/month',
    description: 'The ultimate luxury experience with no limitations.',
    features: [
      'All Premium features',
      'Dedicated personal assistant',
      'Private jet bookings',
      'Yacht charters',
      'Celebrity chef experiences',
      'Exclusive access to sold-out events',
      'Global luxury property access'
    ]
  }
];

const MembershipOptions = () => {
  const { initiateCheckout, isLoading } = useStripeCheckout();

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {membershipTiers.map((tier) => (
          <div 
            key={tier.id}
            className={`rounded-lg overflow-hidden shadow-lg border ${
              tier.highlighted 
                ? 'border-luxe-blue ring-2 ring-luxe-blue/20 transform md:-translate-y-4' 
                : 'border-gray-200'
            } transition-all hover:shadow-xl`}
          >
            <div className={`p-6 text-center ${tier.highlighted ? 'bg-luxe-blue text-white' : 'bg-luxe-dark text-white'}`}>
              {tier.highlighted && (
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-white bg-opacity-20 bg-white rounded-full mb-2">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex justify-center items-end">
                <span className="text-4xl font-bold">{tier.price}</span>
              </div>
            </div>

            <div className="p-6 bg-white h-full flex flex-col">
              <p className="text-gray-600 mb-6 text-center">{tier.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                      tier.highlighted ? 'text-luxe-blue' : 'text-green-500'
                    }`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => initiateCheckout(tier.id)} 
                disabled={isLoading}
                className={`w-full ${
                  tier.highlighted 
                    ? 'bg-luxe-blue hover:bg-blue-700 text-white'
                    : 'bg-luxe-dark hover:bg-gray-800 text-white'
                }`}
              >
                {isLoading ? 'Processing...' : `Select ${tier.name}`}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipOptions;
