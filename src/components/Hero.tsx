import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, MapPin, Activity } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="home" className="relative bg-[#071936] text-white overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_diagnostic_imaging_1793778324761.jpg"
          alt="Dr. Solanki's Diagnostic Centre Radiology Suite"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
        />
        {/* Measured dark gradient overlay for optimal 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071936] via-[#071936]/90 to-[#071936]/65" />
        {/* Soft cyan atmospheric radial accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#65D5E8]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Zero-Pill Unboxed Location & Specialty Indicator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#65D5E8]">
              <span className="flex items-center gap-1.5 text-white/90">
                <MapPin className="w-4 h-4 text-[#65D5E8]" />
                Sarita Vihar, New Delhi
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Radiology &amp; Pathology Centre</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Clarity in Diagnosis. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#65D5E8]">
                Confidence in Care.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Comprehensive diagnostic services with a patient-first approach. From advanced
              ultrasound imaging to pathology investigations, we’re here to support your
              healthcare journey.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1769D2] hover:bg-[#1354a8] active:bg-[#0B2855] rounded-xl shadow-lg shadow-[#1769D2]/25 hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#65D5E8]" />
                <span>Book an Appointment</span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/15 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Human Editorial Trust Notes */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#65D5E8]" />
                <span>Senior MD Radiologist &amp; Pathologist</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#F4C542]" />
                <span>Advanced Digital Ultrasound &amp; Lab</span>
              </div>
            </div>
          </div>

          {/* Quick Consultation & Key Information Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl text-white">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-semibold text-white text-base">
                    Dr. Solanki’s Diagnostic Centre
                  </h3>
                  <p className="text-xs text-[#65D5E8] mt-0.5">
                    Radiology &amp; Pathology Under One Roof
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#1769D2]/40 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#65D5E8]" />
                </div>
              </div>

              {/* Consultation doctors brief */}
              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#65D5E8] mt-1.5 shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-white">Dr. Priyanka Rana</div>
                    <div className="text-xs text-slate-300">MBBS, MD (Radiodiagnosis) · Senior Consultant Radiologist</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F4C542] mt-1.5 shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-white">Dr. Vikrant Solanki</div>
                    <div className="text-xs text-slate-300">MBBS, MD (Pathology) · Senior Consultant Pathologist</div>
                  </div>
                </div>
              </div>

              {/* Contact Assistance Box */}
              <div className="pt-4 border-t border-white/10 bg-[#071936]/40 -mx-6 -mb-6 p-6 rounded-b-2xl space-y-3">
                <div className="text-xs text-slate-300 leading-relaxed">
                  Call our centre directly for same-day appointment availability and test preparation guidelines:
                </div>
                <a
                  href="tel:+919654002800"
                  className="flex items-center justify-between w-full py-2.5 px-3.5 bg-white text-[#0B2855] hover:bg-[#65D5E8] hover:text-[#071936] rounded-xl font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Call: +91 9654002800</span>
                  <span className="text-xs font-normal">Tap to Dial &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
