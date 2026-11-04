import React from 'react';
import { MapPin, Phone, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINICAL_SERVICES } from '../utils/appointment';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071936] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1769D2] flex items-center justify-center text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-current fill-none stroke-[2.2]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v16M4 12h16" />
                  <circle cx="12" cy="12" r="3" className="stroke-[#65D5E8] stroke-[1.8]" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">
                  Dr. Solanki’s
                </span>
                <span className="text-xs font-semibold text-[#65D5E8] tracking-wider uppercase">
                  Diagnostic Centre
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Radiology and Pathology Centre in Sarita Vihar, New Delhi. Dedicated to high-accuracy
              diagnostic imaging and laboratory testing under senior consultant supervision.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Dr. Priyanka Rana · MBBS, MD (Radiodiagnosis)</div>
              <div>Dr. Vikrant Solanki · MBBS, MD (Pathology)</div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65D5E8]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a>
              </li>
              <li>
                <a href="#appointment-form" className="hover:text-white transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact &amp; Map</a>
              </li>
            </ul>
          </div>

          {/* Diagnostic Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65D5E8]">
              Diagnostic Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {CLINICAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectService(s.id);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Telephone (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65D5E8]">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65D5E8] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  G-56, Pocket G, Sarita Vihar, <br />
                  New Delhi, Delhi 110076, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#65D5E8] shrink-0" />
                <a
                  href="tel:+919654002800"
                  className="font-semibold text-white hover:text-[#65D5E8] transition-colors"
                >
                  +91 9654002800
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {currentYear} Dr. Solanki’s Diagnostic Centre. All rights reserved.
          </div>

          <div className="text-slate-400 text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            Medical Disclaimer: Diagnostic investigations are performed as advised by your consulting
            doctor upon presentation of a valid clinical prescription. Compliance with PC-PNDT regulations is strictly maintained.
          </div>
        </div>
      </div>
    </footer>
  );
};
