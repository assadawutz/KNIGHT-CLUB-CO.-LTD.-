import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { ShieldCheck } from 'lucide-react';

const Security: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-24 bg-knight-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-knight-bg border border-white/5 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/3 text-center md:text-left">
            <ShieldCheck className="w-16 h-16 text-knight-accent mb-6 mx-auto md:mx-0" />
            <h2 className="font-display font-bold text-2xl text-white mb-4">Uncompromising Security</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We adhere to the strictest standards of data protection and regulatory compliance required by national agencies and financial institutions.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {content.security.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-white/[0.02] rounded-sm">
                <div className="w-1.5 h-1.5 bg-knight-accent rounded-full"></div>
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;