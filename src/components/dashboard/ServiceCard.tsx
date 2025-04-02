
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const ServiceCard = ({ icon, title, path }: ServiceCardProps) => {
  return (
    <Link to={path} className="luxe-card flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="mb-3 text-luxe-blue">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </Link>
  );
};

export default ServiceCard;
