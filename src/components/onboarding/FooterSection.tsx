
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="py-12 px-6 bg-black text-center">
      <h3 className="text-2xl font-serif font-bold mb-6">Join Our Exclusive Membership</h3>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Experience a world where your desires are met with unparalleled service and attention to detail.
        Dominic—your gateway to a world without limits.
      </p>
      <Link to="/login" className="luxe-button bg-luxe-gold text-black hover:bg-amber-400 inline-flex items-center">
        Become a Member
        <ChevronRight size={18} className="ml-2" />
      </Link>
      
      <div className="mt-12 pt-8 border-t border-gray-800">
        <h4 className="text-xl font-serif font-medium mb-4">Contact Us</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-luxe-gold" />
            <span className="text-gray-300">778-789-9874</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        <p className="mt-2">© {new Date().getFullYear()} Dominic. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterSection;
