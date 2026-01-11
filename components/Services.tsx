import React from 'react';
import { Hammer, Ruler, PaintBucket, Wrench } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: "New Construction",
    description: "Expert installation for new commercial builds, coordinating seamlessly with general contractors."
  },
  {
    icon: Ruler,
    title: "Roof Replacement",
    description: "TPO, EPDM, PVC, and Modified Bitumen replacements designed to last for decades."
  },
  {
    icon: PaintBucket,
    title: "Roof Coatings",
    description: "Extend the life of your existing roof with high-performance silicone and acrylic coating systems."
  },
  {
    icon: Wrench,
    title: "Preventative Maintenance",
    description: "Scheduled inspections and maintenance plans to catch issues before they become emergencies."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-royal-900 mb-4">Complete Commercial Roofing Solutions</h2>
          <p className="text-lg text-gray-600">
            From emergency repairs to full-scale installations, JR & Co delivers industry-leading quality and reliability for Kansas City businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-royal-800 group">
              <div className="w-14 h-14 bg-royal-50 rounded-lg flex items-center justify-center text-royal-800 mb-6 group-hover:bg-royal-800 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-royal-800 font-semibold hover:text-royal-600">
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;