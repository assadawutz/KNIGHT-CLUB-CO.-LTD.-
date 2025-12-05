import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Testimonials: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="testimonials" className="py-32 relative bg-[#020617]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            CLIENT <span className="text-cyan-500">FEEDBACK</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((item) => (
            <div 
              key={item.id}
              className="glass-liquid p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Floating Quote Icon - Liquid Style */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass-liquid bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="flex space-x-1 mb-8">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>

              <p className="text-gray-200 font-light leading-relaxed mb-8 text-lg italic opacity-90">
                "{item.content}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full glass-liquid flex items-center justify-center font-display font-bold text-white text-xl border border-white/10 group-hover:border-cyan-500/50 transition-colors overflow-hidden relative">
                  {item.avatar ? (
                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                  ) : (
                    <span>{item.author.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide text-sm">{item.author}</h4>
                  <p className="text-xs font-mono text-cyan-400 mt-1">{item.role} @ {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;