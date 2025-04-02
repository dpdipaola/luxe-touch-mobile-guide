
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export type MembershipType = 'standard' | 'premium' | 'elite';

export const useStripeCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const initiateCheckout = async (membershipType: MembershipType = 'standard') => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { membershipType },
      });

      if (error) throw error;
      
      if (data?.url) {
        // Show a toast before redirecting
        toast({
          title: 'Redirecting to checkout',
          description: 'You will be redirected to the secure payment page',
        });
        
        // Short delay before redirecting to let the toast appear
        setTimeout(() => {
          window.location.href = data.url;
        }, 1000);
      } else {
        throw new Error('No checkout URL returned from server');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout Failed',
        description: error.message || 'There was an error creating your checkout session.',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };

  return {
    initiateCheckout,
    isLoading
  };
};
