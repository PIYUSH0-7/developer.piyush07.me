import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Palette, 
  Smartphone, 
  Server, 
  Terminal, 
  Database, 
  Layers, 
  Bot, 
  Container, 
  CreditCard, 
  Cloud,
  Cpu
} from 'lucide-react';
import { TECH_STACK } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-green-400" />,
  Terminal: <Terminal className="w-5 h-5 text-yellow-400" />,
  Database: <Database className="w-5 h-5 text-blue-500" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" />,
  Container: <Container className="w-5 h-5 text-blue-400" />,
  CreditCard: <CreditCard className="w-5 h-5 text-violet-400" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />
};

export const TechStackMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'Frontend', 'Backend', 'AI & Agents', 'Database', 'Mobile', 'DevOps'];

  const filteredStack = activeTab === 'All' 
    ? TECH_STACK 
    : TECH_STACK.filter(item => {
        if (activeTab === 'Backend') return item.category.includes('Backend');
        if (activeTab === 'Database') return item.category.includes('Database') || item.category.includes('Cache');
        if (activeTab === 'AI & Agents') return item.category.includes('AI');
        return item.category.includes(activeTab);
      });

  return (
    <section className="py-20 bg-zinc-950 border-t border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Battle-Tested Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered with <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Industry-Leading Technologies</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm">
            We don't chase shiny toys. We build on battle-tested frameworks optimized for developer velocity, security, and sub-second response times.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-600/40 transition-all hover:bg-zinc-900/80 hover:-translate-y-0.5 group"
            >
              <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80 group-hover:scale-105 transition-transform">
                {iconMap[tech.icon] || <Code2 className="w-5 h-5 text-purple-400" />}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-zinc-200 group-hover:text-white truncate">{tech.name}</div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
