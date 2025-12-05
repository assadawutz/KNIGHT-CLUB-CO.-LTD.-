import React, { useRef, useState, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';
import { ExperienceItem } from '../types';

const ExperienceItemView: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative pl-8 pb-12 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      {/* Line & Dot */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)] ring-4 ring-black"></div>
      
      <div className="glass-liquid p-8 hover:bg-white/5 transition-colors group">
        <span className="font-mono text-cyan-500 text-sm font-bold block mb-2 tracking-widest">
          {item.year}
        </span>
        <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-cyan-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { content } = useContent();
  const { experience } = content;

  return (
    <section id="experience" className="py-32 relative bg-[#020617]">
      {/* Fluid Blobs */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass-liquid p-8 border-none bg-gradient-to-br from-white/5 to-transparent">
              <h2 className="font-display font-bold text-5xl text-white mb-8 leading-none">
                SYSTEM <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">HISTORY</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                {experience.intro}
              </p>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
          </div>

          <div className="lg:col-span-2 pt-8">
            {experience.timeline.map((item, index) => (
              <ExperienceItemView key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;