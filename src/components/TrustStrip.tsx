import React from 'react';
import { Scan, TestTube2, UserCheck, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      title: 'Radiology Services',
      description: 'Ultrasound, Doppler, Scans & Digital X-Ray',
      icon: Scan,
    },
    {
      title: 'Pathology Investigations',
      description: 'Comprehensive clinical laboratory diagnostics',
      icon: TestTube2,
    },
    {
      title: 'Experienced Consultants',
      description: 'MD Radiologist & MD Pathologist led centre',
      icon: UserCheck,
    },
    {
      title: 'Sarita Vihar Location',
      description: 'Pocket G, accessible New Delhi facility',
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-[#0B2855] border-y border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#65D5E8]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#65D5E8] font-semibold uppercase tracking-wider mb-0.5">
                    0{idx + 1}. Focus
                  </div>
                  <h2 className="text-base font-semibold text-white tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
