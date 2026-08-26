import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Send, 
  MessageCircle, 
  Check, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Shield,
  Layers,
  Bot,
  Smartphone,
  Globe,
  Database
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  icon: string;
}

const PROJECT_TYPES = [
  { id: 'saas', name: 'Full-Stack SaaS MVP', basePrice: 1499, baseDays: 21, icon: Layers },
  { id: 'mobile', name: 'Cross-Platform Mobile App', basePrice: 1799, baseDays: 28, icon: Smartphone },
  { id: 'ai', name: 'AI Swarm / Custom RAG System', basePrice: 1299, baseDays: 14, icon: Bot },
  { id: 'web', name: 'Custom Web Platform & Portal', basePrice: 999, baseDays: 14, icon: Globe },
  { id: 'api', name: 'Cloud Backend & Microservice', basePrice: 899, baseDays: 10, icon: Database },
];

const ADDON_FEATURES: FeatureOption[] = [
  { id: 'auth', name: 'Zero-Trust Auth & RBAC (Magic Links/OAuth)', price: 250, icon: 'Shield' },
  { id: 'payments', name: 'Payment Gateway (Stripe/Subscriptions)', price: 300, icon: 'DollarSign' },
  { id: 'ai_tools', name: 'OpenAI / Claude AI Agent Automation', price: 450, icon: 'Bot' },
  { id: 'admin', name: 'Executive Admin & Telemetry Dashboard', price: 350, icon: 'Layers' },
  { id: 'realtime', name: 'Real-time WebSockets & Live Push', price: 300, icon: 'Sparkles' },
  { id: 'multilang', name: 'Internationalization (i18n Multi-language)', price: 200, icon: 'Globe' },
  { id: 'mobile_sync', name: 'Offline-First Sync Engine', price: 350, icon: 'Smartphone' },
  { id: 'seo_speed', name: '99+ Lighthouse Optimization & SEO Package', price: 200, icon: 'Check' }
];

const TIMELINE_SPEEDS = [
  { id: 'rapid', name: 'Rapid Sprint (Priority Rush)', multiplier: 1.25, timeFactor: 0.75 },
  { id: 'standard', name: 'Standard Paced Delivery', multiplier: 1.0, timeFactor: 1.0 },
  { id: 'flexible', name: 'Flexible Milestone Flow', multiplier: 0.95, timeFactor: 1.25 }
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['auth', 'payments']);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINE_SPEEDS[1].id);
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const currentTypeObj = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[0];
  const currentTimelineObj = TIMELINE_SPEEDS.find(t => t.id === selectedTimeline) || TIMELINE_SPEEDS[1];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDON_FEATURES.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const rawTotal = (currentTypeObj.basePrice + addonsTotal) * currentTimelineObj.multiplier;
  const estimatedPrice = Math.round(rawTotal);
  const estimatedDays = Math.round(currentTypeObj.baseDays * currentTimelineObj.timeFactor);

  const generateBriefText = () => {
    const selectedAddonNames = selectedAddons
      .map(id => ADDON_FEATURES.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `Hello Piyush!\n\nI configured a project estimate on developer.piyush07.me:\n\n` +
      `• Project Type: ${currentTypeObj.name}\n` +
      `• Selected Features: ${selectedAddonNames || 'Standard baseline'}\n` +
      `• Desired Pace: ${currentTimelineObj.name}\n` +
      `• Estimated Budget Range: ~$${estimatedPrice} USD\n` +
      `• Estimated Duration: ~${estimatedDays} days\n` +
      `• Name: ${clientName || 'Not specified'}\n` +
      `• Contact: ${clientContact || 'Not specified'}\n` +
      `• Project Brief: ${projectNotes || 'Let us discuss details on call.'}`;
  };

  const handleWhatsAppSend = () => {
    const brief = generateBriefText();
    const encoded = encodeURIComponent(brief);
    window.open(`https://wa.me/918923845912?text=${encoded}`, '_blank');
    setSubmittedMessage(true);
  };

  const handleEmailSend = () => {
    const brief = generateBriefText();
    const subject = encodeURIComponent(`Project Inquiry: ${currentTypeObj.name} [developer.piyush07.me]`);
    const body = encodeURIComponent(brief);
    window.open(`mailto:${AGENCY_CONFIG.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmittedMessage(true);
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/70 text-purple-300 text-xs font-mono mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build Your Brief & Get an <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Instant Estimate</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Select your project specifications below to calculate turnaround duration and transparent baseline pricing. Send your brief directly in 1-click.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scope Selection (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/60 p-6 sm:p-8 rounded-2xl border border-zinc-800 backdrop-blur-md">
            
            {/* Step 1: Project Type */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Select Core Project Architecture</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-purple-950/60 border-purple-500 shadow-md shadow-purple-950 text-white'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">{type.name}</div>
                        <div className="text-[11px] font-mono text-purple-400 mt-0.5">from ${type.basePrice}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Addons */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Select Module Addons</h3>
                </div>
                <span className="text-xs text-zinc-400 font-mono">({selectedAddons.length} selected)</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDON_FEATURES.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isChecked
                          ? 'bg-indigo-950/50 border-indigo-500 text-white'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 pr-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-purple-600 border-purple-500 text-white' : 'border-zinc-700 bg-zinc-900'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-300 shrink-0">+${addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Speed */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Delivery Velocity & Timeline</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {TIMELINE_SPEEDS.map((speed) => {
                  const isSelected = selectedTimeline === speed.id;
                  return (
                    <button
                      key={speed.id}
                      type="button"
                      onClick={() => setSelectedTimeline(speed.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-purple-950/60 border-purple-500 text-white font-semibold'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-xs">{speed.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Quick Project Brief Inputs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Your Project Context (Optional)</h3>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name or Company"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp number or Email"
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Describe your core goal, target user, or custom requirements..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Estimate Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-purple-950/40 via-zinc-900 to-zinc-950 p-6 sm:p-8 border border-purple-800/60 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h3 className="text-base font-bold text-white">Estimated Quote</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Fixed Scope Price
                </span>
              </div>

              {/* Price & Turnaround Display */}
              <div className="py-6 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Estimated Total</span>
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white mt-1">
                    ${estimatedPrice.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">USD • No Hidden Surcharges</span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Timeline</span>
                  <div className="text-2xl font-bold font-mono text-purple-300 mt-1 flex items-center gap-1 justify-end">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>~{estimatedDays} Days</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">Agile Sprints</span>
                </div>
              </div>

              {/* Summary List */}
              <div className="space-y-2.5 py-4 border-t border-b border-zinc-800 text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Architecture:</span>
                  <span className="font-semibold text-white">{currentTypeObj.name}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Addons:</span>
                  <span className="font-semibold text-white">{selectedAddons.length} features included</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Code Transfer:</span>
                  <span className="text-emerald-400 font-semibold">100% Full IP Ownership</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Post-Launch Warranty:</span>
                  <span className="text-purple-300 font-semibold">30 Days Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Brief via WhatsApp (+91 8923845912)</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium text-xs border border-zinc-700 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-purple-400" />
                  <span>Send Brief via Email</span>
                </button>
              </div>

              {submittedMessage && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-center text-xs text-emerald-300 animate-fade-in">
                  ✓ Brief initialized! Piyush will review and respond within 2-4 business hours.
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
