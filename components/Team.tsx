import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Team: React.FC = () => {
  const { content } = useContent();
  const { team } = content;

  return (
    <section id="team" className="py-24 bg-knight-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="font-mono text-knight-accent text-xs tracking-widest uppercase mb-4 block">Our Squad</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Built for Precision</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {team.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {team.culturePoints.map((point, i) => (
                <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-gray-400">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {team.stats.map((stat, i) => (
              <div key={i} className="bg-knight-surface p-6 text-center border-t-2 border-knight-accent">
                <div className="font-display font-bold text-3xl text-white mb-2">{stat.value}</div>
                <div className="text-xs font-mono text-gray-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;