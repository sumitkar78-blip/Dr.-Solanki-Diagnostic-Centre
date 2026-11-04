import React from 'react';
import { Layers, Stethoscope, Microscope, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Radiology & Pathology Under One Roof',
      text: 'Eliminates the inconvenience of visiting multiple facilities for complementary clinical investigations.',
      icon: Layers,
    },
    {
      title: 'Consultant-Led Diagnostic Services',
      text: 'Supervised and reported directly by Senior Consultants with specialized MD qualifications.',
      icon: Stethoscope,
    },
    {
      title: 'Multiple Imaging & Investigation Options',
      text: 'From advanced 3D/4D/5D scans and Color Doppler to comprehensive pathology laboratory work.',
      icon: Microscope,
    },
    {
      title: 'Convenient Appointment Assistance',
      text: 'Dedicated telephone and messaging support to assist with test scheduling and preparation.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Presentation Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Facility Photography */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src="/src/assets/images/diagnostic_centre_facility_1793778328128.jpg"
                  alt="Dr. Solanki's Diagnostic Centre Reception and Patient Lounge in Sarita Vihar"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071936]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#65D5E8] font-semibold mb-1">
                    Sarita Vihar Centre
                  </div>
                  <div className="font-bold text-lg">
                    Patient-First Comfort &amp; Modern Diagnostic Facilities
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    G-56, Pocket G, Sarita Vihar, New Delhi
                  </div>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#071936] text-white p-4 rounded-xl shadow-lg border border-white/10 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#1769D2] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-white">Clinical Integrity</span>
                  <span className="text-slate-300">Detailed diagnostic reports for your doctor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
              About Dr. Solanki’s Diagnostic Centre
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Advanced Diagnostics. <br />
              <span className="text-[#1769D2]">A Patient-First Approach.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dr. Solanki’s Diagnostic Centre is a Radiology and Pathology Centre located in Sarita
              Vihar, New Delhi. Our centre offers a range of diagnostic investigations with a focus on
              professional expertise, patient comfort, and supporting informed clinical decisions.
            </p>

            {/* 4 Highlights */}
            <div className="grid sm:grid-cols-2 gap-5 pt-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-[#1769D2]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1769D2]/10 text-[#1769D2] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
