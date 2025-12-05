import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { getIconComponent } from '../utils/icons';
import { Check } from 'lucide-react';

const Industries: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="industries" className="py-24 bg-knight-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Specialized Industries</h2>
          <p className="text-gray-400">We understand the unique constraints of highly regulated sectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.industries.map((industry) => {
             const Icon = getIconComponent(industry.iconName);
             return (
               <div key={industry.id} className="relative pl-8 border-l border-white/10 hover:border-knight-accent transition-colors">
                 <div className="absolute -left-3 top-0 bg-knight-surface p-1">
                    <div className="w-4 h-4 rounded-full border border-knight-accent bg-knight-accent/20"></div>
                 </div>
                 
                 <div className="flex items-center space-x-4 mb-6">
                   <div className="p-3 bg-white/5 rounded-full text-white">
                      <Icon className="w-6 h-6" />
                   </div>
                   <h3 className="font-display font-bold text-2xl text-white">{industry.name}</h3>
                 </div>
                 
                 <p className="text-gray-300 mb-6 text-lg">{industry.description}</p>
                 
                 <div className="space-y-3">
                   {industry.painPoints.map((point, idx) => (
                     <div key={idx} className="flex items-start text-sm text-gray-500">
                       <Check className="w-4 h-4 text-knight-accent mr-3 mt-0.5" />
                       <span>{point}</span>
                     </div>
                   ))}
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;