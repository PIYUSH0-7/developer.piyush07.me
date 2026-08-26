import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SaaSShowcase } from './components/SaaSShowcase';
import { ServicesGrid } from './components/ServicesGrid';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TechStackMatrix } from './components/TechStackMatrix';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-purple-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Background Ambience / Subtle Starfield */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <SaaSShowcase />
        <ServicesGrid />
        <ProjectEstimator />
        <TechStackMatrix />
        <ProcessTimeline />
        <PricingSection />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
