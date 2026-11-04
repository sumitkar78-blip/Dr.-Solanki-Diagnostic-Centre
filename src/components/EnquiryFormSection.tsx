import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  User,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Info
} from 'lucide-react';
import {
  CLINICAL_SERVICES,
  validateIndianPhone,
  buildWhatsAppEnquiryUrl,
  getServicePrepInstructions
} from '../utils/appointment';

interface EnquiryFormSectionProps {
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
}

export const EnquiryFormSection: React.FC<EnquiryFormSectionProps> = ({
  selectedServiceId,
  onSelectServiceId
}) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState<{ patientName?: string; phoneNumber?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const currentPrep = getServicePrepInstructions(selectedServiceId || 'whole-body-ultrasound');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { patientName?: string; phoneNumber?: string } = {};

    if (!patientName.trim()) {
      newErrors.patientName = 'Please enter the patient name.';
    }

    const phoneValidation = validateIndianPhone(phoneNumber);
    if (!phoneValidation.isValid) {
      newErrors.phoneNumber = phoneValidation.error || 'Please enter a valid 10-digit mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const generatedUrl = buildWhatsAppEnquiryUrl({
      patientName,
      phoneNumber: phoneValidation.normalized,
      serviceId: selectedServiceId || 'whole-body-ultrasound',
      preferredDate,
      notes
    });

    setWhatsAppUrl(generatedUrl);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatientName('');
    setPhoneNumber('');
    setPreferredDate('');
    setNotes('');
  };

  return (
    <section id="appointment-form" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Preparation Insights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
              Online Appointment Assistance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Enquire for Your Diagnostic Appointment
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Submit your enquiry online to prefill test preparation details, or connect directly
              with our desk over telephone and WhatsApp.
            </p>

            {/* Preparation Preview Box for Selected Service */}
            <div className="p-5 rounded-2xl bg-[#F5F8FC] border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2855]">
                <Info className="w-4 h-4 text-[#1769D2]" />
                <span>Test Preparation Overview</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">
                {currentPrep.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentPrep.guidelines[0]}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span>Fasting: {currentPrep.fastingRequired ? 'Required' : 'Not required'}</span>
                <span>Hydration: {currentPrep.waterRequirement.slice(0, 24)}...</span>
              </div>
            </div>

            {/* Direct Telephone Assistance */}
            <div className="p-5 rounded-2xl bg-[#0B2855] text-white space-y-2">
              <div className="text-xs font-semibold text-[#65D5E8] uppercase tracking-wider">
                Need Immediate Confirmation?
              </div>
              <div className="text-sm font-medium text-slate-200">
                Call our reception directly for urgent investigations and exact slot timing.
              </div>
              <a
                href="tel:+919654002800"
                className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#65D5E8] transition-colors pt-1"
              >
                <Phone className="w-4 h-4 text-[#65D5E8]" />
                <span>+91 9654002800</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F8FC] p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/80 shadow-md">
              {submitted ? (
                <div className="text-center py-6 space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Enquiry Generated Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{patientName}</strong>. To
                      dispatch your details instantly to Dr. Solanki's Diagnostic Centre desk, tap
                      the WhatsApp button below or call us directly.
                    </p>
                  </div>

                  {/* Clarification banner as requested */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1">
                    <div className="font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Important Notice Regarding Confirmation:</span>
                    </div>
                    <p>
                      Appointments are confirmed only upon staff verification. Please bring your
                      referring clinician's signed prescription.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <a
                      href="tel:+919654002800"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0B2855] hover:bg-[#1769D2] text-white font-semibold text-sm rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#65D5E8]" />
                      <span>Call +91 9654002800</span>
                    </a>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer"
                    >
                      Fill another enquiry form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Appointment Enquiry Details
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enter basic patient information to verify schedule and test requirements.
                    </p>
                  </div>

                  {/* Patient Name */}
                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(e) => {
                          setPatientName(e.target.value);
                          if (errors.patientName) setErrors({ ...errors, patientName: undefined });
                        }}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 text-sm rounded-xl border focus:outline-none transition-colors ${
                          errors.patientName
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-300 focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20'
                        }`}
                        required
                      />
                    </div>
                    {errors.patientName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.patientName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Mobile Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm font-medium">
                        +91
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        placeholder="9654002800"
                        maxLength={14}
                        className={`w-full pl-12 pr-4 py-2.5 bg-white text-slate-900 text-sm rounded-xl border focus:outline-none transition-colors ${
                          errors.phoneNumber
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-300 focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20'
                        }`}
                        required
                      />
                    </div>
                    {errors.phoneNumber ? (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    ) : (
                      <p className="text-[11px] text-slate-500 mt-1">
                        We will call or WhatsApp this number to confirm test slot.
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="serviceSelect"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Diagnostic Service <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="serviceSelect"
                        value={selectedServiceId}
                        onChange={(e) => onSelectServiceId(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white text-slate-900 text-sm rounded-xl border border-slate-300 focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20 focus:outline-none transition-colors"
                      >
                        {CLINICAL_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          id="preferredDate"
                          value={preferredDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 text-sm rounded-xl border border-slate-300 focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message / Prescription Details */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Prescription / Clinical Notes (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="notes"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Referring doctor name, specific organ requested, or symptoms..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 text-sm rounded-xl border border-slate-300 focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submission Disclaimer */}
                  <div className="text-[11px] text-slate-500 leading-relaxed">
                    By submitting, your request will be formatted to connect with Dr. Solanki's
                    Diagnostic Centre via WhatsApp or telephone for timing confirmation. No sensitive
                    medical data is stored externally.
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-6 bg-[#0B2855] hover:bg-[#1769D2] text-white font-semibold text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#65D5E8]" />
                      <span>Proceed to Confirm on WhatsApp</span>
                    </button>

                    <a
                      href="tel:+919654002800"
                      className="w-full sm:w-auto py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#1769D2]" />
                      <span>Call Instead</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
