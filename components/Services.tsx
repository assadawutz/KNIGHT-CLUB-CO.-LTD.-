import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { getIconComponent } from '../utils/icons';

const Services: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="services" className="py-24 bg-knight-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Core Competencies</h2>
          <p className="text-gray-400 max-w-2xl">End-to-end AI solutions designed for scalability, security, and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.map((service) => {
            const Icon = getIconComponent(service.iconName);
            return (
              <div key={service.id} className="card-minimal p-8 group">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-knight-accent group-hover:bg-knight-accent group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-knight-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;