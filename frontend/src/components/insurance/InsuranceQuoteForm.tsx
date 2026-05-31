'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Check, Shield, ChevronRight, User, MapPin, Calendar, Users } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import type { InsurancePlan } from '@/types'

type Locale = 'es' | 'en'

interface QuoteFormData {
  tripScope: 'domestic' | 'international'
  // Trip details
  destination: string
  departureDate: string
  returnDate: string
  travelers: number
  // Personal data
  fullName: string
  email: string
  phone: string
  nationality: string
  birthDate: string
  // Selected plan
  planId: string
}

const initialForm: QuoteFormData = {
  tripScope: 'international',
  destination: '',
  departureDate: '',
  returnDate: '',
  travelers: 1,
  fullName: '',
  email: '',
  phone: '',
  nationality: '',
  birthDate: '',
  planId: 'intl-150000',
}

const domesticPlans: InsurancePlan[] = [
  {
    id: 'dom-6000',
    name: { es: 'Nacional 6,000', en: 'Domestic 6,000' },
    description: {
      es: 'Cobertura fija para viajes internos en Costa Rica',
      en: 'Fixed coverage for domestic trips in Costa Rica',
    },
    pricePerDay: 3.5,
    maxCoverage: 6000,
    recommended: false,
    features: {
      es: ['Asistencia medica en viaje nacional', 'Cobertura de emergencia', 'Soporte durante el viaje'],
      en: ['Domestic travel medical assistance', 'Emergency coverage', 'Travel support during the trip'],
    },
  },
  {
    id: 'dom-10000',
    name: { es: 'Nacional 10,000', en: 'Domestic 10,000' },
    description: {
      es: 'Cobertura fija con mayor respaldo en viaje interno',
      en: 'Fixed coverage with increased support for domestic travel',
    },
    pricePerDay: 4.75,
    maxCoverage: 10000,
    recommended: true,
    features: {
      es: ['Asistencia medica ampliada', 'Traslados y emergencias', 'Soporte 24/7'],
      en: ['Extended medical assistance', 'Transport and emergencies', '24/7 support'],
    },
  },
  {
    id: 'dom-20000',
    name: { es: 'Nacional 20,000', en: 'Domestic 20,000' },
    description: {
      es: 'Cobertura fija alta para viaje nacional',
      en: 'High fixed coverage for domestic travel',
    },
    pricePerDay: 6.75,
    maxCoverage: 20000,
    recommended: false,
    features: {
      es: ['Cobertura nacional premium', 'Emergencias medicas de mayor costo', 'Asistencia prioritaria'],
      en: ['Premium domestic coverage', 'Higher-cost medical emergencies', 'Priority assistance'],
    },
  },
]

const internationalPlans: InsurancePlan[] = [
  {
    id: 'intl-35000',
    name: { es: 'Internacional 35,000', en: 'International 35,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 35000,
    recommended: false,
    features: {
      es: ['Asistencia medica internacional', 'COVID-19 segun plan', 'Repatriacion segun plan'],
      en: ['International medical assistance', 'COVID-19 according to plan', 'Repatriation according to plan'],
    },
  },
  {
    id: 'intl-60000',
    name: { es: 'Internacional 60,000', en: 'International 60,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 60000,
    recommended: false,
    features: {
      es: ['Asistencia medica internacional', 'Equipaje y documentos', 'Soporte 24/7'],
      en: ['International medical assistance', 'Baggage and documents', '24/7 support'],
    },
  },
  {
    id: 'intl-150000',
    name: { es: 'Internacional 150,000', en: 'International 150,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 150000,
    recommended: true,
    features: {
      es: ['Asistencia medica internacional', 'Cancelacion/interrupcion segun plan', 'Asistencia legal basica'],
      en: ['International medical assistance', 'Cancellation/interruption by plan', 'Basic legal assistance'],
    },
  },
  {
    id: 'intl-250000',
    name: { es: 'Internacional 250,000', en: 'International 250,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 250000,
    recommended: false,
    features: {
      es: ['Cobertura medica ampliada', 'Emergencias complejas', 'Repatriacion avanzada'],
      en: ['Extended medical coverage', 'Complex emergencies', 'Advanced repatriation'],
    },
  },
  {
    id: 'intl-500000',
    name: { es: 'Internacional 500,000', en: 'International 500,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 500000,
    recommended: false,
    features: {
      es: ['Cobertura de alto monto', 'Asistencia prioritaria', 'Soporte premium'],
      en: ['High-amount coverage', 'Priority assistance', 'Premium support'],
    },
  },
  {
    id: 'intl-1000000',
    name: { es: 'Internacional 1,000,000', en: 'International 1,000,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 1000000,
    recommended: false,
    features: {
      es: ['Cobertura elite internacional', 'Asistencia integral', 'Soporte 24/7 premium'],
      en: ['Elite international coverage', 'Comprehensive assistance', '24/7 premium support'],
    },
  },
  {
    id: 'intl-3000000',
    name: { es: 'Internacional 3,000,000', en: 'International 3,000,000' },
    description: { es: 'Cobertura internacional fija', en: 'Fixed international coverage' },
    pricePerDay: 0,
    maxCoverage: 3000000,
    recommended: false,
    features: {
      es: ['Cobertura maxima internacional', 'Asistencia de mayor alcance', 'Gestion de emergencias mayores'],
      en: ['Maximum international coverage', 'Wider assistance scope', 'Major-emergency management'],
    },
  },
]

function calcDays(departure: string, returnDate: string): number {
  if (!departure || !returnDate) return 0
  const diff = new Date(returnDate).getTime() - new Date(departure).getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

function calcAge(birthDate: string): number | null {
  if (!birthDate) return null
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}

export default function InsuranceQuoteForm({ locale }: { locale: Locale }) {
  const t = useTranslations('insurance')
  const [form, setForm] = useState<QuoteFormData>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({})

  const days = calcDays(form.departureDate, form.returnDate)
  const plans = form.tripScope === 'domestic' ? domesticPlans : internationalPlans
  const selectedPlan = plans.find((p) => p.id === form.planId) ?? plans[0]
  const totalPrice =
    days > 0 && selectedPlan.pricePerDay > 0
      ? (selectedPlan.pricePerDay * days * form.travelers).toFixed(2)
      : null

  function set<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function setTripScope(scope: 'domestic' | 'international') {
    const scopePlans = scope === 'domestic' ? domesticPlans : internationalPlans
    setForm((prev) => ({
      ...prev,
      tripScope: scope,
      planId: scopePlans[0].id,
    }))
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {}
    const required = locale === 'es' ? 'Campo obligatorio' : 'Required field'
    if (!form.destination.trim()) newErrors.destination = required
    if (!form.departureDate) newErrors.departureDate = required
    if (!form.returnDate) newErrors.returnDate = required
    if (form.returnDate && form.departureDate && form.returnDate <= form.departureDate) {
      newErrors.returnDate = locale === 'es' ? 'Debe ser después de la salida' : 'Must be after departure'
    }
    if (!form.fullName.trim()) newErrors.fullName = required
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = locale === 'es' ? 'Email inválido' : 'Invalid email'
    }
    if (!form.phone.trim()) newErrors.phone = required
    if (!form.nationality.trim()) newErrors.nationality = required
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function formatDate(date: string): string {
    if (!date) return '—'
    return new Date(`${date}T12:00:00`).toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    const coverageText = days > 0
      ? `${days} ${locale === 'es' ? `día${days > 1 ? 's' : ''}` : `day${days > 1 ? 's' : ''}`}`
      : '—'

    const message = [
      locale === 'es'
        ? 'Hola, quiero solicitar una cotización de seguro de viaje.'
        : 'Hello, I want to request a travel insurance quote.',
      '',
      locale === 'es' ? 'Datos del viajero:' : 'Traveler details:',
      `${locale === 'es' ? 'Nombre' : 'Name'}: ${form.fullName}`,
      `${locale === 'es' ? 'Email' : 'Email'}: ${form.email}`,
      `${locale === 'es' ? 'Telefono' : 'Phone'}: ${form.phone}`,
      `${locale === 'es' ? 'Nacionalidad' : 'Nationality'}: ${form.nationality}`,
      `${locale === 'es' ? 'Fecha de nacimiento' : 'Date of birth'}: ${form.birthDate ? formatDate(form.birthDate) : '—'}`,
      '',
      locale === 'es' ? 'Datos del viaje:' : 'Trip details:',
      `${locale === 'es' ? 'Tipo de viaje' : 'Trip type'}: ${form.tripScope === 'domestic' ? (locale === 'es' ? 'Nacional' : 'Domestic') : (locale === 'es' ? 'Internacional' : 'International')}`,
      `${locale === 'es' ? 'Destino' : 'Destination'}: ${form.destination}`,
      `${locale === 'es' ? 'Salida' : 'Departure'}: ${formatDate(form.departureDate)}`,
      `${locale === 'es' ? 'Regreso' : 'Return'}: ${formatDate(form.returnDate)}`,
      `${locale === 'es' ? 'Cobertura' : 'Coverage'}: ${coverageText}`,
      `${locale === 'es' ? 'Viajeros' : 'Travelers'}: ${form.travelers}`,
      '',
      locale === 'es' ? 'Plan solicitado:' : 'Requested plan:',
      `${locale === 'es' ? 'Plan' : 'Plan'}: ${selectedPlan.name[locale]}`,
      `${locale === 'es' ? 'Precio por dia' : 'Price per day'}: ${selectedPlan.pricePerDay > 0 ? `$${selectedPlan.pricePerDay}` : (locale === 'es' ? 'Tarifa de referencia' : 'Reference rate')}`,
      `${locale === 'es' ? 'Cobertura maxima' : 'Max coverage'}: $${selectedPlan.maxCoverage.toLocaleString()}`,
      totalPrice ? `${locale === 'es' ? 'Total estimado' : 'Estimated total'}: $${totalPrice}` : '',
      locale === 'es' ? 'Nota: Tarifas de referencia sujetas a cambios.' : 'Note: Reference rates are subject to change.',
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl = buildWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── LEFT / MAIN ──────────────────────── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Section: Trip details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-5">
            <h2 className="font-display text-xl font-bold text-brand-navy flex items-center gap-2">
              <MapPin size={20} className="text-brand-gold" />
              {locale === 'es' ? 'Datos del viaje' : 'Trip details'}
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'es' ? 'Tipo de viaje' : 'Trip type'}
              </label>
              <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setTripScope('domestic')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    form.tripScope === 'domestic' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500'
                  }`}
                >
                  {locale === 'es' ? 'Nacional' : 'Domestic'}
                </button>
                <button
                  type="button"
                  onClick={() => setTripScope('international')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    form.tripScope === 'international' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-500'
                  }`}
                >
                  {locale === 'es' ? 'Internacional' : 'International'}
                </button>
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {locale === 'es' ? 'Destino(s)' : 'Destination(s)'}
                <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                value={form.destination}
                onChange={(e) => set('destination', e.target.value)}
                placeholder={locale === 'es' ? 'Ej: Europa, España, Francia…' : 'E.g.: Europe, Spain, France…'}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.destination ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.destination && <p className="text-xs text-red-500 mt-1">{errors.destination}</p>}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar size={13} className="inline mr-1" />
                  {locale === 'es' ? 'Fecha de salida' : 'Departure date'}
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="date"
                  value={form.departureDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => set('departureDate', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.departureDate ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.departureDate && <p className="text-xs text-red-500 mt-1">{errors.departureDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar size={13} className="inline mr-1" />
                  {locale === 'es' ? 'Fecha de regreso' : 'Return date'}
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="date"
                  value={form.returnDate}
                  min={form.departureDate || new Date().toISOString().split('T')[0]}
                  onChange={(e) => set('returnDate', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.returnDate ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.returnDate && <p className="text-xs text-red-500 mt-1">{errors.returnDate}</p>}
              </div>
            </div>

            {/* Days pill */}
            {days > 0 && (
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium">
                <Check size={14} />
                {days} {locale === 'es' ? `día${days > 1 ? 's' : ''} de cobertura` : `day${days > 1 ? 's' : ''} of coverage`}
              </div>
            )}

            {/* Number of travelers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users size={13} className="inline mr-1" />
                {locale === 'es' ? 'Número de viajeros' : 'Number of travelers'}
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => set('travelers', Math.max(1, form.travelers - 1))}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold text-lg leading-none"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-brand-navy text-lg">{form.travelers}</span>
                <button
                  type="button"
                  onClick={() => set('travelers', Math.min(20, form.travelers + 1))}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold text-lg leading-none"
                >
                  +
                </button>
                <span className="text-sm text-gray-400">
                  {locale === 'es' ? 'persona(s)' : 'person(s)'}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Plan selection */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <h2 className="font-display text-xl font-bold text-brand-navy flex items-center gap-2 mb-5">
              <Shield size={20} className="text-brand-gold" />
              {locale === 'es' ? 'Seleccione su cobertura' : 'Select your coverage'}
            </h2>
            <div className="space-y-4">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  locale={locale}
                  selected={form.planId === plan.id}
                  days={days}
                  travelers={form.travelers}
                  onSelect={() => set('planId', plan.id)}
                />
              ))}
            </div>
          </div>

          {/* Section: Personal data */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-5">
            <h2 className="font-display text-xl font-bold text-brand-navy flex items-center gap-2">
              <User size={20} className="text-brand-gold" />
              {locale === 'es' ? 'Datos del viajero principal' : 'Primary traveler data'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {locale === 'es' ? 'Nombre completo' : 'Full name'}<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => set('fullName', e.target.value)}
                  placeholder={locale === 'es' ? 'Nombre y apellidos' : 'First and last name'}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.fullName ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {locale === 'es' ? 'Correo electrónico' : 'Email'}<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {locale === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+506 8888-0000"
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {locale === 'es' ? 'Nacionalidad' : 'Nationality'}<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={form.nationality}
                  onChange={(e) => set('nationality', e.target.value)}
                  placeholder={locale === 'es' ? 'Ej: Costarricense' : 'E.g.: Costa Rican'}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${errors.nationality ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.nationality && <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {locale === 'es' ? 'Fecha de nacimiento' : 'Date of birth'}
                </label>
                <input
                  type="date"
                  value={form.birthDate}
                  max={new Date().toISOString().split('T')[0]}
                  onChange={(e) => set('birthDate', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                />
                {form.birthDate && (
                  <p className="text-xs text-gray-400 mt-1">
                    {locale === 'es' ? 'Edad' : 'Age'}: {calcAge(form.birthDate)} {locale === 'es' ? 'años' : 'years'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT / SUMMARY ──────────────────── */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <div className="bg-brand-navy text-white px-6 py-5">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                {locale === 'es' ? 'Resumen de cotización' : 'Quote summary'}
              </p>
              <p className="font-display text-xl font-bold">{selectedPlan.name[locale]}</p>
            </div>

            <div className="px-6 py-5 space-y-3 text-sm">
              {/* Destination */}
              <SummaryRow
                label={locale === 'es' ? 'Destino' : 'Destination'}
                value={form.destination || '—'}
              />
              <SummaryRow
                label={locale === 'es' ? 'Tipo' : 'Type'}
                value={form.tripScope === 'domestic' ? (locale === 'es' ? 'Nacional' : 'Domestic') : (locale === 'es' ? 'Internacional' : 'International')}
              />
              {/* Dates */}
              <SummaryRow
                label={locale === 'es' ? 'Salida' : 'Departure'}
                value={form.departureDate ? new Date(form.departureDate + 'T12:00:00').toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
              />
              <SummaryRow
                label={locale === 'es' ? 'Regreso' : 'Return'}
                value={form.returnDate ? new Date(form.returnDate + 'T12:00:00').toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
              />
              <SummaryRow
                label={locale === 'es' ? 'Días' : 'Days'}
                value={days > 0 ? String(days) : '—'}
              />
              <SummaryRow
                label={locale === 'es' ? 'Viajeros' : 'Travelers'}
                value={String(form.travelers)}
              />

              <div className="border-t border-gray-100 pt-3">
                <SummaryRow
                  label={locale === 'es' ? 'Precio por día' : 'Price per day'}
                  value={
                    selectedPlan.pricePerDay > 0
                      ? `$${selectedPlan.pricePerDay} × ${form.travelers} ${locale === 'es' ? 'persona(s)' : 'person(s)'}`
                      : locale === 'es'
                        ? 'Tarifa de referencia'
                        : 'Reference rate'
                  }
                />
              </div>

              {/* Total */}
              <div className="bg-brand-cream rounded-xl p-4 mt-2">
                <p className="text-xs text-gray-400 mb-1">
                  {locale === 'es' ? 'Total estimado' : 'Estimated total'}
                </p>
                {totalPrice ? (
                  <>
                    <p className="font-display text-3xl font-bold text-brand-navy">${totalPrice}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {days} {locale === 'es' ? 'días' : 'days'} × {form.travelers} {locale === 'es' ? 'viajero(s)' : 'traveler(s)'} × ${selectedPlan.pricePerDay}/día
                    </p>
                  </>
                ) : (
                  <p className="text-gray-400 text-sm">
                    {selectedPlan.pricePerDay > 0
                      ? locale === 'es' ? 'Seleccione fechas para ver el total' : 'Select dates to see total'
                      : locale === 'es' ? 'Cotizacion segun edad, destino y condiciones del plan' : 'Quote depends on age, destination and plan conditions'}
                  </p>
                )}
              </div>

              <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                {locale === 'es'
                  ? 'Tarifas de referencia sujetas a cambios sin previo aviso.'
                  : 'Reference rates are subject to change without prior notice.'}
              </p>

              {/* Max coverage badge */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <Shield size={13} className="text-brand-gold shrink-0" />
                {locale === 'es' ? 'Cobertura máxima' : 'Max coverage'}:
                <span className="font-bold text-brand-navy">${selectedPlan.maxCoverage.toLocaleString()}</span>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-3.5 text-base gap-2"
              >
                {isSubmitting
                  ? locale === 'es' ? 'Abriendo WhatsApp...' : 'Opening WhatsApp...'
                  : locale === 'es' ? 'Cotizar por WhatsApp' : 'Quote via WhatsApp'}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  locale,
  selected,
  days,
  travelers,
  onSelect,
}: {
  plan: InsurancePlan
  locale: Locale
  selected: boolean
  days: number
  travelers: number
  onSelect: () => void
}) {
  const total = days > 0 ? (plan.pricePerDay * days * travelers).toFixed(2) : null

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 ${
        selected
          ? 'border-brand-gold bg-amber-50/60 shadow-md'
          : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          {/* Radio indicator */}
          <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selected ? 'border-brand-gold' : 'border-gray-300'}`}>
            {selected && <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-brand-navy">{plan.name[locale]}</span>
              {plan.recommended && (
                <span className="text-xs bg-brand-gold text-white px-2 py-0.5 rounded-full font-medium">
                  {locale === 'es' ? 'Popular' : 'Popular'}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{plan.description[locale]}</p>

            {/* Features (collapsed to 3 when not selected) */}
            <ul className="mt-2 space-y-1">
              {(selected ? plan.features[locale] : plan.features[locale].slice(0, 3)).map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <Check size={11} className="text-green-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
              {!selected && plan.features[locale].length > 3 && (
                <li className="text-xs text-brand-gold font-medium pl-4">
                  +{plan.features[locale].length - 3} {locale === 'es' ? 'más…' : 'more…'}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Price */}
        <div className="text-right shrink-0">
          <p className="font-display text-2xl font-bold text-brand-navy">${plan.pricePerDay}</p>
          <p className="text-xs text-gray-400">{locale === 'es' ? '/día/persona' : '/day/person'}</p>
          {total && (
            <p className="text-xs font-semibold text-brand-gold mt-1">
              ≈ ${total} {locale === 'es' ? 'total' : 'total'}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-brand-navy text-right">{value}</span>
    </div>
  )
}
