import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Check, 
  Activity, 
  Boxes,
  Zap
} from 'lucide-react';
import { SAAS_PRODUCTS } from '../data/agencyData';

export const SaaSShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'EdTech', 'AI & Automation', 'Developer Tools', 'Productivity', 'Enterprise'];

  const filteredProducts = activeCategory === 'All'
    ? SAAS_PRODUCTS
    : SAAS_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="saas" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>Proprietary SaaS Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured In-House <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">SaaS Products</span>
            </h2>
            <p className="mt-2 text-zinc-400 max-w-xl text-sm sm:text-base">
              Explore software products built by our studio. We dogfood our own architectural principles in real-world production environments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 p-1.5 bg-zinc-900/80 rounded-xl border border-zinc-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-purple-600/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/20 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.accentColor}`} />

              <div>
                {/* Header Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {product.badge && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-purple-300 border border-purple-900/50">
                      {product.badge}
                    </span>
                  )}
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1.5 ${
                    product.status === 'Live'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                      : product.status === 'Beta'
                      ? 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      product.status === 'Live' ? 'bg-emerald-400' : product.status === 'Beta' ? 'bg-amber-400' : 'bg-zinc-500'
                    }`} />
                    {product.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                  {product.name}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-3">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Stats if available */}
                {product.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-5 p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                        <span className="text-xs font-mono font-bold text-zinc-200">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & Action CTAs */}
              <div className="pt-4 border-t border-zinc-800/60">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between gap-3">
                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-semibold shadow-md shadow-purple-950 transition-all"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {product.githubUrl && (
                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-700 transition-all ${
                        !product.demoUrl ? 'flex-1' : ''
                      }`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom SaaS Build Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-zinc-900/50 border border-purple-800/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Want a custom SaaS product engineered for your business?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                We can architect and launch a complete whitelabel SaaS or bespoke web application tailored to your niche.
              </p>
            </div>
          </div>
          <a
            href="#estimator"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs transition-all shadow-lg shadow-white/10 hover:shadow-white/20"
          >
            Start Custom Build
          </a>
        </div>

      </div>
    </section>
  );
};
