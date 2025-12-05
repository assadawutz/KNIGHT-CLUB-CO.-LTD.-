export interface ServiceItem {
  id: number;
  title: string; // EN
  description: string; // TH
  iconName: string;
}

export interface ProductItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface IndustryItem {
  id: number;
  name: string; // EN
  description: string; // TH
  painPoints: string[];
  iconName: string;
}

export interface MissionItem {
  id: number;
  title: string; // EN (Case Name)
  problem: string;
  solution: string;
  result: string;
  tags: string[];
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface SecurityPoint {
  id: number;
  text: string;
}

export interface TeamSection {
  description: string;
  culturePoints: string[];
  stats: { label: string; value: string }[];
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

export interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: number;
  stars: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface InsightItem {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
}

export interface SiteContent {
  hero: {
    tagline: string; // EN
    headlineTH: string;
    subheadingTH: string;
    bullets: string[];
  };
  about: {
    story: string;
    differentiation: string;
  };
  services: ServiceItem[];
  industries: IndustryItem[];
  products: ProductItem[];
  missions: MissionItem[]; // Case Studies
  process: ProcessStep[];
  security: SecurityPoint[];
  team: TeamSection;
  contact: {
    address: string;
    email: string;
    phone: string;
  };
  experience: {
    intro: string;
    timeline: ExperienceItem[];
  };
  solutions: SolutionItem[];
  testimonials: TestimonialItem[];
  insights: InsightItem[];
}