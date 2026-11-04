import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateIndianPhone,
  buildWhatsAppEnquiryUrl,
  filterServicesByCategory,
  getServicePrepInstructions,
  CLINICAL_SERVICES
} from './appointment';

test('validateIndianPhone correctly validates 10-digit Indian numbers', () => {
  // Valid formats
  assert.equal(validateIndianPhone('9654002800').isValid, true);
  assert.equal(validateIndianPhone('+919654002800').isValid, true);
  assert.equal(validateIndianPhone('+91 96540 02800').isValid, true);
  assert.equal(validateIndianPhone('919654002800').isValid, true);
  assert.equal(validateIndianPhone('09654002800').isValid, true);
  assert.equal(validateIndianPhone('98112-23344').isValid, true);

  // Invalid formats
  assert.equal(validateIndianPhone('').isValid, false);
  assert.equal(validateIndianPhone('12345').isValid, false); // too short
  assert.equal(validateIndianPhone('5551234567').isValid, false); // starts with 5 (invalid Indian mobile)
  assert.equal(validateIndianPhone('9654002800123').isValid, false); // too long
  assert.equal(validateIndianPhone('abcdefghij').isValid, false); // non-numeric
});

test('buildWhatsAppEnquiryUrl encodes patient and service information safely', () => {
  const url = buildWhatsAppEnquiryUrl({
    patientName: 'Rohan Sharma',
    phoneNumber: '9654002800',
    serviceId: 'obgy-ultrasound',
    preferredDate: '2026-11-10',
    notes: 'Prescribed by Dr. Gupta'
  });

  assert.match(url, /^https:\/\/wa\.me\/919654002800\?text=/);
  assert.match(url, /Rohan%20Sharma/);
  assert.match(url, /OBGY%20Ultrasound/);
  assert.match(url, /2026-11-10/);
});

test('filterServicesByCategory filters accurately', () => {
  const allServices = filterServicesByCategory(CLINICAL_SERVICES, 'all');
  assert.equal(allServices.length, 8);

  const radiologyOnly = filterServicesByCategory(CLINICAL_SERVICES, 'radiology');
  assert.equal(radiologyOnly.length, 5); // Whole body, OBGY, 3D/4D/5D, Color Doppler, Digital X-Ray

  const cardiacOnly = filterServicesByCategory(CLINICAL_SERVICES, 'cardiac');
  assert.equal(cardiacOnly.length, 2); // ECG, 2D Echo

  const pathologyOnly = filterServicesByCategory(CLINICAL_SERVICES, 'pathology');
  assert.equal(pathologyOnly.length, 1); // All Pathology Services
});

test('getServicePrepInstructions returns accurate instructions', () => {
  const ultrasoundPrep = getServicePrepInstructions('whole-body-ultrasound');
  assert.equal(ultrasoundPrep.fastingRequired, true);
  assert.equal(ultrasoundPrep.guidelines.length > 0, true);

  const unknownPrep = getServicePrepInstructions('unknown-service');
  assert.equal(unknownPrep.title, 'General Diagnostic Investigation Guidelines');
});
