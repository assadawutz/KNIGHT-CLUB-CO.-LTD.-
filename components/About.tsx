import React from 'react';
import { useContent } from '../contexts/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="about" className="py-24 bg-knight-bg border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="font-mono text-knight-accent text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
          Strategic AI Partner for<br />Enterprise Growth
        </h2>
        
        <div className="space-y-8 text-lg text-gray-400 font-light leading-relaxed">
          <p>{content.about.story}</p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-gray-300 font-normal">
            <span className="text-knight-accent font-bold">Why Knight Club?</span> {content.about.differentiation}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;