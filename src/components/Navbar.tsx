import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Sparkles, 
  Menu, 
  X, 
  ExternalLink, 
  MessageCircle, 
  ArrowRight,
  Layers,
  Code2,
  Cpu,
  DollarSign
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SaaS Products', href: '#saas', icon: Layers },
    { label: 'Services', href: '#services', icon: Code2 },
    { label: 'Estimator', href: '#estimator', icon: Sparkles },
    { label: 'Process', href: '#process', icon: Cpu },
    { label: 'Pricing', href: '#pricing', icon: DollarSign },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Subdomain Badge */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-900/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
              <Terminal className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                PIYUSH07
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-purple-950/80 text-purple-300 border border-purple-800/60">
                AGENCY
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 tracking-wider block">
              developer.piyush07.me
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-zinc-800/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Links */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Back to Portfolio Link */}
          <a
            href={AGENCY_CONFIG.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 px-3 py-1.5 rounded-lg border border-zinc-800/80 hover:bg-zinc-900 transition-all font-mono"
            title="Visit Main Portfolio"
          >
            <span>piyush07.me</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* WhatsApp / Intake Action */}
          <a
            href="#estimator"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium rounded-full group bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-md shadow-purple-900/20 hover:shadow-purple-900/40 transition-all"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-zinc-950 rounded-full group-hover:bg-transparent text-white flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:text-white" />
              <span>Get Project Quote</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#estimator"
            className="text-xs bg-purple-600 text-white font-medium px-3 py-1.5 rounded-full"
          >
            Quote
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-5 backdrop-blur-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-zinc-300 hover:text-purple-400 py-2 border-b border-zinc-900"
              >
                <link.icon className="w-4 h-4 text-purple-400" />
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href={AGENCY_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-zinc-400 py-2 font-mono"
              >
                <span>Personal Portfolio (piyush07.me)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+91 8923845912)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
