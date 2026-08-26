export type SaaSStatus = 'Live' | 'Beta' | 'In Development' | 'Open Source';

export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Productivity' | 'AI & Automation' | 'Developer Tools' | 'EdTech' | 'Enterprise';
  status: SaaSStatus;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
  badge?: string;
  stats?: { label: string; value: string }[];
}

export interface AgencyService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  startingPrice: string;
  iconName: string;
  gradient: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  rating: number;
  highlight: string;
}
