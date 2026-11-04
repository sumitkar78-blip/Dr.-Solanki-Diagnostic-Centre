import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#071936] text-slate-300 py-2 px-4 border-b border-white/10 text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="font-semibold text-white tracking-wide">
            Radiology &amp; Pathology Centre
          </span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span className="text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#65D5E8]" />
            Sarita Vihar, New Delhi
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-slate-300">
            <Clock className="w-3 h-3 text-[#F4C542]" />
            <span>Call to confirm timings</span>
          </div>
          <span className="text-white/40" aria-hidden="true">·</span>
          <a
            href="tel:+919654002800"
            className="flex items-center gap-1 font-semibold text-white hover:text-[#65D5E8] transition-colors"
            aria-label="Call Diagnostic Centre at +91 9654002800"
          >
            <Phone className="w-3 h-3 text-[#65D5E8]" />
            <span>+91 9654002800</span>
          </a>
        </div>
      </div>
    </div>
  );
};
