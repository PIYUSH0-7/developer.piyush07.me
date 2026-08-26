import React from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Take Your Vision to <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Production</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Transparent milestones, continuous staging demos, and weekly deliverables so you stay in total control.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-600/40 transition-all hover:bg-zinc-900/70 group"
            >
              <div>
                {/* Step number & duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-purple-500/80 group-hover:text-purple-400 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {step.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-3 border-t border-zinc-800/60">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1.5">Deliverables:</span>
                <ul className="space-y-1">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
