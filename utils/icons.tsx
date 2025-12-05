import React from 'react';
import { 
  Cpu, Lock, Globe, Database, Smartphone, CloudLightning, 
  Shield, Terminal, Code, Server, Wifi, Zap, Activity,
  Search, Eye, Box, Layers, Landmark, BookOpen, Building, Rocket,
  Package
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu, Lock, Globe, Database, Smartphone, CloudLightning,
  Shield, Terminal, Code, Server, Wifi, Zap, Activity,
  Search, Eye, Box, Layers, Landmark, BookOpen, Building, Rocket,
  Package
};

export const getIconComponent = (name: string) => {
  const Icon = iconMap[name] || Shield;
  return Icon;
};

export const iconNames = Object.keys(iconMap);