import React from 'react';
import { 
  DollarSign, 
  Check, 
  Sparkles, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { PRICING_TIERS, AGENCY_CONFIG } from '../data/agencyData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-mono mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Pricing Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Straightforward Investment, <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Zero Surprises</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Fixed-scope contracts and fractional CTO retainers engineered for founders who value velocity, predictable outcomes, and high code standards.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-purple-950/60 via-zinc-900 to-zinc-950 border-2 border-purple-500 shadow-2xl shadow-purple-950/50 -translate-y-2'
                    : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {tier.badge || 'Most Popular'}
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-zinc-800">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">{tier.price}</span>
                    <span className="text-xs font-mono text-zinc-500">/{tier.period}</span>
                  </div>

                  {/* Features List */}
                  <div className="pt-6 space-y-3 mb-8">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">What's Included:</span>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href="#estimator"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs transition-all shadow-md ${
                      isPopular
                        ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-950 hover:shadow-purple-900'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Contract Guarantee Banner */}
        <div className="mt-12 text-center text-xs text-zinc-500 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA & 100% IP Security</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Milestone-Based Escrow / Invoicing</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span>Direct Founder Access & Daily Updates</span>
          </div>
        </div>

      </div>
    </section>
  );
};
