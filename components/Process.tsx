import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Process: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-24 bg-knight-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Execution Protocol</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {content.process.map((step) => (
              <div key={step.id} className="relative bg-knight-bg p-4 z-10 text-center group">
                <div className="w-12 h-12 mx-auto bg-knight-surface border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-knight-accent group-hover:text-knight-accent transition-colors">
                  <span className="font-mono font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;