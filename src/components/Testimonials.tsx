import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/60 text-yellow-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Builders & <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Product Leaders</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all backdrop-blur-sm"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <div className="text-xs font-mono text-purple-300 font-semibold mb-3">
                  "{review.highlight}"
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                  {review.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{review.name}</div>
                  <div className="text-[11px] text-zinc-500 font-mono">{review.role} • {review.company}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
