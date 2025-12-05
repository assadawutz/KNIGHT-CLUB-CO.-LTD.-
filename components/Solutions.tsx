import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { getIconComponent } from '../utils/icons';
import { ArrowRight, Layers } from 'lucide-react';

const Solutions: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="solutions" className="py-32 relative bg-[#020617] overflow-hidden">
      
      {/* Liquid Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-cyan-500 font-mono text-xs tracking-widest mb-4 uppercase bg-cyan-500/10 px-4 py-2 rounded-full">
            <Layers className="w-4 h-4" />
            <span>Targeted Operations</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">ZONES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-light leading-relaxed">
             Specialized tactical solutions for high-stakes industries. We adapt our warfare strategies to fit your specific battlefield.
          </p>
        </div>

        {/* Liquid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.solutions.map((solution, index) => {
             const IconComponent = getIconComponent(solution.iconName);
             return (
              <div 
                key={solution.id} 
                className="group relative min-h-[300px] glass-liquid p-10 flex flex-col justify-between overflow-hidden"
              >
                {/* Smooth Gradient Hover BG */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 glass-liquid rounded-2xl bg-white/5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="font-display font-bold text-6xl text-white/5 group-hover:text-white/10 transition-colors select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-3xl text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    {solution.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 flex items-center text-sm font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">
                  <span className="uppercase tracking-widest mr-4">Deploy Solution</span>
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
             );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solutions;