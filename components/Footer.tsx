import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC<{ onAdminClick: () => void }> = ({ onAdminClick }) => {
  return (
    <footer className="bg-knight-bg py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Shield className="w-4 h-4 text-gray-600" />
          <span className="font-display font-bold text-gray-500 tracking-wide">KNIGHT CLUB CO., LTD.</span>
        </div>

        <div className="text-xs font-mono text-gray-600">
          © {new Date().getFullYear()} All Rights Reserved. | <button onClick={onAdminClick} className="hover:text-knight-accent transition-colors">Admin Access</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;