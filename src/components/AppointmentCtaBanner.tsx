import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface AppointmentCtaBannerProps {
  onBookClick: () => void;
}

export const AppointmentCtaBanner: React.FC<AppointmentCtaBannerProps> = ({ onBookClick }) => {
  return (
    <section className="bg-gradient-to-r from-[#071936] via-[#0B2855] to-[#1769D2] text-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#65D5E8]">
              Prompt Diagnostic Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Looking for a Diagnostic Test?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Get in touch with our centre for appointment availability, test preparation
              instructions, and diagnostic service enquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            {/* Primary Phone Button (verbatim requirement: tel:+919654002800) */}
            <a
              href="tel:+919654002800"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#0B2855] hover:bg-[#65D5E8] hover:text-[#071936] text-sm sm:text-base font-bold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98"
            >
              <Phone className="w-5 h-5 text-[#1769D2]" />
              <span>Call Now: +91 9654002800</span>
            </a>

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/919654002800?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20diagnostic%20test%20at%20Dr.%20Solanki's%20Diagnostic%20Centre."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-semibold rounded-xl shadow transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            {/* Form Scroll Trigger */}
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-xl border border-white/20 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#65D5E8]" />
              <span>Enquiry Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
