import React from 'react';
import { Award, Shield, Clock, Users } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
                { icon: Shield, title: "Fully Licensed", desc: "& Insured" },
                { icon: Clock, title: "24/7 Emergency", desc: "Response Team" },
                { icon: Award, title: "Top Rated", desc: "In Kansas City" },
                { icon: Users, title: "Family Owned", desc: "Since 1986" },
            ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="p-3 bg-royal-50 text-royal-800 rounded-full">
                        <item.icon size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="border-t border-gray-100 pt-10">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder Logos using Text/Shapes for simplicity as images might break */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 w-32 bg-gray-100 flex items-center justify-center rounded text-gray-400 font-bold text-lg italic hover:bg-gray-200 transition-colors cursor-default">
                  CLIENT {i}
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;