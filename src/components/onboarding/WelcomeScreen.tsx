
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FooterSection from './FooterSection';

const WelcomeScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxe-dark text-white overflow-hidden">
      <HeroSection scrollToServices={scrollToServices} />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default WelcomeScreen;
