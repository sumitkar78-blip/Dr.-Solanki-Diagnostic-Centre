import React, { useState } from 'react';
import {
  ScanLine,
  HeartPulse,
  Box,
  Activity,
  FileText,
  Zap,
  Heart,
  FlaskConical,
  Phone,
  HelpCircle,
  Calendar,
  ChevronRight
} from 'lucide-react';
import {
  CLINICAL_SERVICES,
  ServiceItem,
  filterServicesByCategory,
  getServicePrepInstructions,
  ServicePrepGuide
} from '../utils/appointment';

interface ServicesSectionProps {
  onOpenPrepModal: (guide: ServicePrepGuide) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenPrepModal,
  onBookService
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'radiology' | 'cardiac' | 'pathology'>('all');

  const filteredServices = filterServicesByCategory(CLINICAL_SERVICES, activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ScanLine':
        return <ScanLine className="w-6 h-6 text-[#1769D2]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#1769D2]" />;
      case 'Box':
        return <Box className="w-6 h-6 text-[#1769D2]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#1769D2]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#1769D2]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#1769D2]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#1769D2]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-[#1769D2]" />;
      default:
        return <Activity className="w-6 h-6 text-[#1769D2]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
            Comprehensive Clinical Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Diagnostic Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our centre provides advanced ultrasound imaging, specialized scans, cardiac
            evaluations, and comprehensive clinical pathology investigations led by experienced
            medical consultants.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl max-w-full overflow-x-auto mt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0B2855] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services (8)
            </button>
            <button
              onClick={() => setActiveCategory('radiology')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'radiology'
                  ? 'bg-white text-[#0B2855] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Radiology &amp; Ultrasound (5)
            </button>
            <button
              onClick={() => setActiveCategory('cardiac')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'cardiac'
                  ? 'bg-white text-[#0B2855] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cardiac Tests (2)
            </button>
            <button
              onClick={() => setActiveCategory('pathology')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'pathology'
                  ? 'bg-white text-[#0B2855] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pathology Labs (1)
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-[#F5F8FC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#1769D2]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#1769D2]/10 border border-slate-200/60 group-hover:border-[#1769D2]/20 flex items-center justify-center transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1769D2] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Description (verbatim as requested) */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Preparation Tip preview */}
                  <div className="text-xs text-slate-500 bg-white/70 p-2.5 rounded-lg border border-slate-200/50 mb-4">
                    <span className="font-semibold text-slate-700">Preparation: </span>
                    {service.preparationTip}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-200/60 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenPrepModal(getServicePrepInstructions(service.id))}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769D2] hover:text-[#0B2855] transition-colors py-1 cursor-pointer"
                      title="View test preparation guidelines"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Prep Instructions</span>
                    </button>

                    <a
                      href="tel:+919654002800"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors py-1"
                    >
                      <Phone className="w-3 h-3 text-[#1769D2]" />
                      <span>Call to Enquire</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#0B2855] group-hover:bg-[#1769D2] rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                    <ChevronRight className="w-3 h-3 opacity-70" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
