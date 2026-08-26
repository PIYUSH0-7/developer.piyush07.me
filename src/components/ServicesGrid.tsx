import React from 'react';
import { 
  Rocket, 
  Smartphone, 
  Bot, 
  Code2, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Check,
  Zap
} from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-purple-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-blue-400" />,
  Bot: <Bot className="w-6 h-6 text-amber-400" />,
  Code2: <Code2 className="w-6 h-6 text-emerald-400" />,
  Server: <Server className="w-6 h-6 text-fuchsia-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-rose-400" />
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Solutions for{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              High-Growth Ventures
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            From zero to launch and beyond. We combine senior engineering depth with product mindset to deliver mission-critical software.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 group"
            >
              <div>
                {/* Icon & Meta */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Code2 className="w-6 h-6 text-purple-400" />}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-purple-400 font-medium mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Key Deliverables:</span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer / Price & CTA */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Starting From</span>
                  <span className="text-lg font-bold font-mono text-white">{service.startingPrice}</span>
                </div>

                <a
                  href="#estimator"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-purple-600 text-zinc-200 hover:text-white text-xs font-semibold transition-all group-hover:shadow-md"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
