
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStripeCheckout } from '@/hooks/use-stripe-checkout';

type MembershipTier = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
};

const membershipTiers: MembershipTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '$99',
    description: 'Essential concierge services for the discerning individual.',
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
    price: '$199',
    description: 'Enhanced services with priority access to exclusive events.',
    features: [
      'All Standard features',
      'Priority concierge',
      'Luxury travel planning',
      'VIP event access',
      'Exclusive restaurant access',
      'Personal shopping assistance'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$499',
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
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-luxe-dark">Choose Your Membership</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Select the membership tier that aligns with your lifestyle and aspirations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {membershipTiers.map((tier) => (
          <div 
            key={tier.id}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform hover:transform hover:scale-105"
          >
            <div className="bg-luxe-dark text-white p-6 text-center">
              <h3 className="font-serif text-2xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex justify-center items-end">
                <span className="text-4xl font-bold">{tier.price}</span>
              </div>
            </div>

            <div className="p-6 bg-white">
              <p className="text-gray-600 mb-6 text-center">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => initiateCheckout(tier.id as any)} 
                disabled={isLoading}
                className="w-full bg-luxe-blue hover:bg-blue-700 text-white"
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
