import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { ArrowUpRight } from 'lucide-react';

const Insights: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="insights" className="py-32 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="font-display font-bold text-4xl text-white">
              DIGITAL <span className="text-gray-600">INTEL</span>
            </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center text-sm font-mono text-cyan-500 hover:text-white transition-colors">
            VIEW ALL INTELLIGENCE <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.insights.map((insight) => (
            <article key={insight.id} className="group cursor-pointer glass-liquid p-6 hover:bg-white/5 transition-colors">
              
              {/* Liquid Framed Image Container */}
              <div className="glass-liquid p-2 rounded-2xl mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                  {/* Gradient Placeholder / Image */}
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-blue-900/40 group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                      {insight.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-xs font-mono text-gray-500 mb-3 space-x-2">
                <span>{new Date(insight.date).toLocaleDateString()}</span>
                <span className="text-cyan-500">•</span>
                <span>CLASSIFIED</span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {insight.title}
              </h3>

              <p className="text-gray-400 text-sm font-light line-clamp-2 leading-relaxed">
                {insight.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <a href="#" className="inline-flex items-center text-sm font-mono text-cyan-500 hover:text-white transition-colors">
            VIEW ALL INTELLIGENCE <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Insights;