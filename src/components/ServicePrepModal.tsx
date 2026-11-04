import React from 'react';
import { X, Phone, AlertCircle, Droplets, UtensilsCrossed, FileText } from 'lucide-react';
import { ServicePrepGuide } from '../utils/appointment';

interface ServicePrepModalProps {
  guide: ServicePrepGuide | null;
  onClose: () => void;
  onSelectForEnquiry: (serviceId: string) => void;
}

export const ServicePrepModal: React.FC<ServicePrepModalProps> = ({
  guide,
  onClose,
  onSelectForEnquiry,
}) => {
  if (!guide) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prep-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold text-[#1769D2] uppercase tracking-wider">
              Patient Preparation Guide
            </span>
            <h3 id="prep-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {guide.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close preparation guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Requirements Strip */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <UtensilsCrossed className="w-3.5 h-3.5 text-slate-700" />
              <span>Fasting</span>
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {guide.fastingRequired ? 'Required (6-12 hrs)' : 'No Fasting Needed'}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Droplets className="w-3.5 h-3.5 text-[#1769D2]" />
              <span>Hydration</span>
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {guide.waterRequirement}
            </div>
          </div>
        </div>

        {/* Specific Guidelines */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Key Patient Instructions
          </h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {guide.guidelines.map((line, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2] mt-2 shrink-0" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Prescription Note */}
        <div className="mt-5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-start gap-2.5 text-xs text-amber-900">
          <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            Please bring your doctor's signed prescription and any past diagnostic reports with you.
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onSelectForEnquiry(guide.serviceId);
              onClose();
            }}
            className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-[#1769D2] hover:bg-[#1354a8] text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-colors cursor-pointer"
          >
            Book Appointment for this Test
          </button>
          <a
            href="tel:+919654002800"
            className="w-full sm:w-auto py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#1769D2]" />
            <span>Call to Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
