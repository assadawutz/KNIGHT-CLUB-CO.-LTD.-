import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sword } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-6 border border-knight-accent/30 rounded-full bg-knight-accent/5 backdrop-blur-sm">
              <span className="text-xs font-mono text-knight-accent tracking-widest uppercase font-semibold">
                {hero.tagline}
              </span>
            </div>
            
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
              {hero.headlineTH}
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl font-light border-l-2 border-knight-accent pl-6 bg-gradient-to-r from-knight-accent/5 to-transparent py-2">
              {hero.subheadingTH}
            </p>

            <div className="space-y-4 mb-10">
              {hero.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-knight-accent" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-knight-accent hover:bg-knight-accentHover text-white font-display font-bold text-sm tracking-widest uppercase transition-all rounded-sm flex items-center group shadow-[0_0_20px_rgba(255,0,110,0.3)] hover:shadow-[0_0_30px_rgba(255,0,110,0.5)]">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="px-8 py-4 border border-gray-700 hover:border-knight-accent text-white font-display font-bold text-sm tracking-widest uppercase transition-all rounded-sm hover:bg-white/5 backdrop-blur-sm">
                Explore Services
              </a>
            </div>
          </div>

          {/* Visual Section - Digital Knight Concept */}
          <div className="relative order-1 lg:order-2 flex justify-center">
             <div className="relative w-full aspect-square max-w-[400px] lg:max-w-lg mx-auto">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-white/5 rounded-full animate-spin-reverse-slow"></div>
                
                {/* Glowing Core Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-knight-accent/30 to-blue-600/10 rounded-full blur-[60px] opacity-60"></div>
                
                {/* Central "Knight" Shield Emblem */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-knight-surface/80 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                    
                    {/* Animated Glint */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative flex flex-col items-center z-10">
                       <div className="relative mb-6">
                         {/* Shield Icon */}
                         <Shield className="w-32 h-32 text-gray-800 fill-knight-surface stroke-[1.5]" />
                         {/* Glowing Accent Overlay */}
                         <Shield className="absolute inset-0 w-32 h-32 text-knight-accent stroke-[1.5] drop-shadow-[0_0_15px_rgba(255,0,110,0.5)]" />
                         
                         {/* Sword/Cross Element */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-50">
                            <Sword className="w-16 h-16 text-white rotate-45" />
                         </div>
                       </div>
                       
                       <h3 className="text-3xl font-display font-bold text-white mb-1 tracking-wider">KNIGHT</h3>
                       <p className="text-xs font-mono text-knight-accent uppercase tracking-[0.3em] bg-knight-accent/10 px-2 py-1 rounded">System Guardian</p>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-0 right-10 bg-knight-surface border border-white/10 p-3 rounded-lg shadow-xl animate-bounce-slow">
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-gray-400">AI Active</span>
                   </div>
                </div>

                <div className="absolute bottom-10 left-0 bg-knight-surface border border-white/10 p-3 rounded-lg shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                   <div className="flex items-center space-x-2">
                      <Shield className="w-3 h-3 text-knight-accent" />
                      <span className="text-xs font-mono text-gray-400">Defense: 100%</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;