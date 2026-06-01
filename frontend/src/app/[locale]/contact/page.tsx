'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { AGENCY_PHONE_DISPLAY_INTL } from '@/lib/whatsapp'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const prefilledRef = useRef(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (prefilledRef.current) return

    const tour = searchParams.get('tour')
    const date = searchParams.get('date')
    const intent = searchParams.get('intent')

    if (!tour && !date && !intent) return

    const intentText =
      intent === 'BOOK_NOW'
        ? locale === 'es'
          ? 'Reservar ahora'
          : 'Book now'
        : intent === 'CONTACT_ADVISOR'
          ? locale === 'es'
            ? 'Contactar con un asesor'
            : 'Contact an advisor'
          : ''

    const lines = [
      tour ? `${locale === 'es' ? 'Tour de interes' : 'Interested tour'}: ${tour}` : '',
      date ? `${locale === 'es' ? 'Salida seleccionada' : 'Selected departure'}: ${date}` : '',
      intentText ? `${locale === 'es' ? 'Intencion' : 'Intent'}: ${intentText}` : '',
      locale === 'es'
        ? 'Hola, me gustaria recibir informacion y disponibilidad de esta salida.'
        : 'Hi, I would like details and availability for this departure.',
    ].filter(Boolean)

    setForm((prev) => ({
      ...prev,
      destination: tour ?? prev.destination,
      message: prev.message || lines.join('\n'),
    }))

    prefilledRef.current = true
  }, [searchParams, locale])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSent(true)
  }

  const destinations = ['Costa Rica', 'Madrid', 'Milano', 'Roma', 'Eslovenia / Slovenia', 'Suiza / Switzerland', 'Inglaterra / England', locale === 'es' ? 'Otro' : 'Other']
  const destinationOptions = form.destination && !destinations.includes(form.destination)
    ? [form.destination, ...destinations]
    : destinations

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1920&q=80')` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-display text-xl font-bold text-brand-navy mb-6">{t('office')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy text-sm">1110 Brickell Ave # 430K-101</p>
                      <p className="text-gray-500 text-sm">Miami, Florida 33131</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-brand-gold" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{locale === 'es' ? 'Costa Rica' : 'Costa Rica'}</p>
                      <p className="font-medium text-brand-navy text-sm">{AGENCY_PHONE_DISPLAY_INTL}</p>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-2">{locale === 'es' ? 'Inglaterra' : 'United Kingdom'}</p>
                      <p className="font-medium text-brand-navy text-sm">+44 7735 701311</p>
                      <p className="text-gray-500 text-xs mt-1">WhatsApp {locale === 'es' ? 'disponible' : 'available'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy text-sm">soporte@voratravel.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy text-sm">{t('hours')}</p>
                      <p className="text-gray-500 text-xs whitespace-pre-wrap">{t('hoursText')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">{t('success')}</h3>
                    <button onClick={() => setSent(false)} className="btn-outline mt-6 text-sm py-2 px-6">
                      {locale === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">{t('name')}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-sm"
                          placeholder={locale === 'es' ? 'Juan Pérez' : 'John Doe'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">{t('email')}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-sm"
                          placeholder="email@ejemplo.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">{t('phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-sm"
                          placeholder="+506 ..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">{t('destination')}</label>
                        <select
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-sm bg-white"
                        >
                          <option value="">{locale === 'es' ? 'Seleccionar...' : 'Select...'}</option>
                          {destinationOptions.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1.5">{t('message')}</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t('messagePlaceholder')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? t('sending') : t('send')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
