import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight, Box } from 'lucide-react';

const Products: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="products" className="py-24 bg-knight-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">Enterprise Platforms</h2>
            <p className="text-gray-400">Ready-to-deploy frameworks for immediate impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.products.map((product) => (
            <div key={product.id} className="bg-white/[0.03] border border-white/10 p-8 rounded-sm hover:border-knight-accent/50 transition-colors flex flex-col">
              <div className="mb-6">
                <Box className="w-8 h-8 text-knight-accent mb-4" />
                <h3 className="font-display font-bold text-2xl text-white">{product.title}</h3>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{product.subtitle}</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {product.description}
              </p>
              
              <div className="border-t border-white/5 pt-6">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-knight-accent rounded-full mr-2"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="text-sm font-bold text-white hover:text-knight-accent transition-colors flex items-center">
                  Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;