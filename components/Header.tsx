import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-royal-900 text-white p-2 rounded-sm">
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-royal-900 leading-none tracking-tight">JR & CO</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Roofing Excellence</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-royal-800 font-medium transition-colors">Commercial</a>
            <a href="#" className="text-gray-700 hover:text-royal-800 font-medium transition-colors">Industrial</a>
            <a href="#" className="text-gray-700 hover:text-royal-800 font-medium transition-colors">Sheet Metal</a>
            <a href="#" className="text-gray-700 hover:text-royal-800 font-medium transition-colors">Service</a>
            <a href="#" className="text-gray-700 hover:text-royal-800 font-medium transition-colors">About Us</a>
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-xs text-gray-500 uppercase font-semibold">24/7 Emergency</span>
              <a href="tel:8165550123" className="text-lg font-bold text-royal-900 flex items-center hover:text-royal-700">
                <Phone size={16} className="mr-1" /> (816) 555-0123
              </a>
            </div>
            <Button size="sm" variant="primary">Request Service</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 p-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 font-medium">Commercial</a>
            <a href="#" className="text-gray-800 font-medium">Industrial</a>
            <a href="#" className="text-gray-800 font-medium">Sheet Metal</a>
            <a href="#" className="text-gray-800 font-medium">Service</a>
            <a href="#" className="text-gray-800 font-medium">About Us</a>
            <div className="pt-4 border-t">
               <a href="tel:8165550123" className="flex items-center justify-center text-xl font-bold text-royal-900 mb-4">
                <Phone size={20} className="mr-2" /> (816) 555-0123
              </a>
              <Button fullWidth>Request Service</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;