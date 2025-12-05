import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Missions: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="missions" className="py-24 bg-knight-bg relative overflow-hidden">
      {/* Subtle Background Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-knight-accent text-xs tracking-widest uppercase mb-2 block">Proven Results</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Mission Logs</h2>
        </div>

        <div className="space-y-6">
          {content.missions.map((mission) => (
            <div key={mission.id} className="group relative bg-knight-surface border border-white/5 p-8 hover:border-knight-accent transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mission.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-white/20 text-gray-400 px-2 py-1 uppercase">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-knight-accent transition-colors">{mission.title}</h3>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">The Problem</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{mission.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">Our Solution</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{mission.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-knight-accent uppercase mb-2">Impact</h4>
                    <p className="text-sm text-white font-medium leading-relaxed">{mission.result}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;