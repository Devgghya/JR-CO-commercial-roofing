import React from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="text-royal-500" size={32} />
              <span className="text-2xl font-bold text-white">JR & CO</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Kansas City's premier commercial roofing contractor since 1986. Excellence in safety, quality, and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-royal-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-royal-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-royal-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-royal-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roof Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sheet Metal Fabrication</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disaster Response</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-royal-500" />
                <span>1234 Industrial Parkway<br/>Kansas City, MO 64120</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-royal-500" />
                <a href="tel:8165550123" className="hover:text-white">(816) 555-0123</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-royal-500" />
                <a href="mailto:info@jrnco.com" className="hover:text-white">info@jrnco.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} JR & Co Roofing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;