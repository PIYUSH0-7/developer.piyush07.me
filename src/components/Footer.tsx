import React from 'react';
import { 
  Terminal, 
  Linkedin, 
  Github, 
  MessageCircle, 
  Mail, 
  ExternalLink,
  ArrowUp,
  Heart
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-purple-400" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                {AGENCY_CONFIG.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Boutique SaaS development studio & product engineering firm. We craft high-converting digital platforms, AI automation systems, and web/mobile apps with relentless execution.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-800 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-800 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#saas" className="hover:text-purple-400 transition-colors">SaaS Products</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Agency Services</a></li>
              <li><a href="#estimator" className="hover:text-purple-400 transition-colors">Project Estimator</a></li>
              <li><a href="#process" className="hover:text-purple-400 transition-colors">Development Process</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing & Retainers</a></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem & Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href={AGENCY_CONFIG.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors font-mono"
                >
                  <span>Main Portfolio (piyush07.me)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://developer.piyush07.me"
                  className="text-zinc-300 hover:text-white transition-colors font-mono"
                >
                  developer.piyush07.me
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Book Instant WhatsApp Call
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-zinc-500 font-mono block">Founder:</span>
                <span className="text-xs text-zinc-300 font-semibold">{AGENCY_CONFIG.founder}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & scroll-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} PIYUSH07 STUDIOS • developer.piyush07.me</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
