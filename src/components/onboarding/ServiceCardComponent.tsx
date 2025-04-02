
import React from 'react';

interface ServiceCardComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const ServiceCardComponent = ({ 
  icon, 
  title, 
  description, 
  images,
  reverse = false
}: ServiceCardComponentProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5 hover:border-luxe-gold/30 transition-all duration-300`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-2xl font-serif font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={img} 
              alt={`${title} image ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardComponent;
