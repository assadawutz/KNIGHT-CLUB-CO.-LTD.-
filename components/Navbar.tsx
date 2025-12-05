import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'INDUSTRIES', href: '#industries' },
  { label: 'CASE STUDIES', href: '#missions' },
  { label: 'TEAM', href: '#team' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar: React.FC<{ onAdminClick: () => void }> = ({ onAdminClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-knight-surface/90 backdrop-blur-md border-b border-white/5 py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-8 h-8 bg-knight-accent rounded flex items-center justify-center">
            <Shield className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-wide">
            KNIGHT <span className="text-knight-accent">CLUB</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-mono font-medium text-gray-400 hover:text-white transition-colors tracking-widest">
              {item.label}
            </a>
          ))}
          <button onClick={onAdminClick} className="ml-4 opacity-30 hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-knight-accent rounded-full"></div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-knight-surface border-b border-white/10 p-6 flex flex-col space-y-4 lg:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-lg font-display font-bold text-white" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;