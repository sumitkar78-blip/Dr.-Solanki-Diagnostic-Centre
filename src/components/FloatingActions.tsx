import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating Action Buttons for Tablet / Desktop (Bottom Right) */}
      <aside
        aria-label="Quick contact actions"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto"
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919654002800?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20test%20at%20Dr.%20Solanki's%20Diagnostic%20Centre."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          aria-label="Enquire via WhatsApp on +91 9654002800"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="whitespace-nowrap tracking-wide">WhatsApp Enquiry</span>
        </a>

        {/* Call Centre Button */}
        <a
          href="tel:+919654002800"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#0B2855] hover:bg-[#1769D2] text-white font-semibold text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-white/20"
          aria-label="Call Dr. Solanki's Diagnostic Centre at +91 9654002800"
        >
          <Phone className="w-4 h-4 text-[#65D5E8]" />
          <span className="whitespace-nowrap tracking-wide">Call +91 9654002800</span>
        </a>
      </aside>

      {/* Mobile Bottom Sticky Bar (Strictly capped under 15% mobile viewport height) */}
      <nav
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2"
      >
        <a
          href="tel:+919654002800"
          className="flex-1 py-3 px-3 bg-[#0B2855] active:bg-[#071936] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          aria-label="Call centre directly"
        >
          <Phone className="w-4 h-4 text-[#65D5E8]" />
          <span>Call Centre</span>
        </a>

        <a
          href="https://wa.me/919654002800?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20test%20at%20Dr.%20Solanki's%20Diagnostic%20Centre."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 bg-[#25D366] active:bg-[#20ba5a] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
};
