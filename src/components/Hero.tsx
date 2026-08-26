import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  Cpu
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-8 shadow-inner animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
          <span className="text-xs font-mono text-zinc-300">
            {AGENCY_CONFIG.availability}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/50 ml-1">
            Accepting Sprints
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Architecting High-Velocity{' '}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent underline decoration-purple-500/30 decoration-wavy decoration-2">
            SaaS Products
          </span>{' '}
          & Custom Digital Software
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-400 mb-10 leading-relaxed font-normal">
          We partner with visionary founders and scaling businesses to engineer production-ready SaaS platforms, cross-platform mobile apps, and autonomous AI automation swarms. Fast execution, clean modular architecture, zero tech debt.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#estimator"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-950/50 hover:shadow-purple-900/60 hover:-translate-y-0.5 transition-all"
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span>Estimate Project / Start Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#saas"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-0.5"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Explore SaaS Portfolio</span>
          </a>

          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 hover:text-emerald-200 font-medium text-sm border border-emerald-800/40 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>

        {/* Agency Highlights Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-zinc-800/80">
          <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-purple-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">3-5 Wks</span>
            </div>
            <span className="text-xs text-zinc-400 text-center">MVP Launch Timeline</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">100%</span>
            </div>
            <span className="text-xs text-zinc-400 text-center">IP & Code Ownership</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">&lt;100ms</span>
            </div>
            <span className="text-xs text-zinc-400 text-center">Optimized API Latency</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">99.9%</span>
            </div>
            <span className="text-xs text-zinc-400 text-center">Cloud Uptime Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};
