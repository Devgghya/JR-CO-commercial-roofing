import React from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 text-white flex flex-col justify-center bg-royal-800">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-royal-100 text-lg mb-8 leading-relaxed">
              Our emergency response team is on standby. Whether it's storm damage or a sudden leak, we minimize downtime and protect your assets.
            </p>
            <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span>24/7 Emergency Dispatch</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span>Free On-Site Assessment</span>
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span>Licensed & Insured Technicians</span>
                </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none" placeholder="Doe" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none" placeholder="Your Business Inc." />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none" placeholder="(555) 123-4567" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none" placeholder="Tell us about your roofing needs..."></textarea>
                </div>
                <Button fullWidth size="lg">Submit Request</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;