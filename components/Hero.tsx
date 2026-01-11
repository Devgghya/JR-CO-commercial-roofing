import React from 'react';
import Button from './Button';
import { AlertTriangle, ChevronRight, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596238628045-812e98774775?q=80&w=2940&auto=format&fit=crop"
          alt="Commercial Roofing Kansas City" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/95 via-royal-900/80 to-royal-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-8 backdrop-blur-sm">
            <AlertTriangle size={16} className="mr-2" />
            <span className="text-sm font-semibold tracking-wide uppercase">Website Under Maintenance</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Commercial Roofing Excellence Since 1986.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed border-l-4 border-amber-500 pl-6">
            Your current website is down, but your business shouldn't be. <br className="hidden md:block"/>
            Call Kansas City's most trusted experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="group">
              <PhoneCall size={20} className="mr-2" />
              (816) 555-0123
            </Button>
            <Button size="lg" variant="white" className="group">
              Request Emergency Service
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="mt-8 text-gray-300 text-sm font-medium">
            Serving Kansas City, MO & Surrounding Areas • Licensed & Insured
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;