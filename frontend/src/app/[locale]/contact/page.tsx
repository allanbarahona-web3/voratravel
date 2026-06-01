'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { AGENCY_PHONE_DISPLAY_INTL, buildWhatsAppUrl } from '@/lib/whatsapp'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isEs = locale === 'es'
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
        ? isEs
          ? 'Reservar ahora'
          : 'Book now'
        : intent === 'CONTACT_ADVISOR'
          ? isEs
            ? 'Contactar con un asesor'
            : 'Contact an advisor'
          : ''

    const lines = [
      tour ? `${isEs ? 'Tour de interes' : 'Interested tour'}: ${tour}` : '',
      date ? `${isEs ? 'Salida seleccionada' : 'Selected departure'}: ${date}` : '',
      intentText ? `${isEs ? 'Intencion' : 'Intent'}: ${intentText}` : '',
      isEs
        ? 'Hola, me gustaria recibir informacion y disponibilidad de esta salida.'
        : 'Hi, I would like details and availability for this departure.',
    ].filter(Boolean)

    setForm((prev) => ({
      ...prev,
      destination: tour ?? prev.destination,
      message: prev.message || lines.join('\n'),
    }))

    prefilledRef.current = true
  }, [searchParams, isEs])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSent(true)
  }

  const destinations = [
    'Costa Rica',
    'Europa Imperial / Imperial Europe',
    'Madrid',
    'Roma / Rome',
    'Milán / Milan',
    'Eslovenia / Slovenia',
    'Suiza / Switzerland',
    isEs ? 'Otro' : 'Other',
  ]

  const destinationOptions = form.destination && !destinations.includes(form.destination)
    ? [form.destination, ...destinations]
    : destinations

  const whatsappMessage = isEs
    ? 'Hola, me gustaría recibir información sobre los tours de Vora Travel.'
    : 'Hi, I would like information about Vora Travel tours.'

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] overflow-hidden bg-[#003B73]">
        <Image
          src="/images/europe-2026/day-26-lago-bled.webp"
          alt="Contact Vora Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B73]/70 via-[#003B73]/50 to-[#003B73]/80" />
        
        <div className="relative z-10 mx-auto flex min-h-[65vh] w-full max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              {isEs ? 'Hablemos de tu próxima aventura' : 'Let\'s talk about your next adventure'}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              {isEs
                ? 'Estamos aquí para ayudarte a planificar el viaje perfecto. Contáctanos por el medio que prefieras.'
                : 'We\'re here to help you plan the perfect trip. Contact us through your preferred channel.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#20BD5A]"
              >
                <MessageCircle size={20} />
                {isEs ? 'WhatsApp Directo' : 'Direct WhatsApp'}
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Mail size={20} />
                {isEs ? 'Formulario' : 'Contact Form'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
              {isEs ? 'Canales de Contacto' : 'Contact Channels'}
            </h2>
            <p className="mt-3 text-[#666B7A]">
              {isEs ? 'Elige el que más te convenga' : 'Choose what works best for you'}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp Costa Rica */}
            <article className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:border-[#25D366] hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366]/10 transition group-hover:bg-[#25D366]/20">
                <MessageCircle size={28} className="text-[#25D366]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#003B73]">WhatsApp</h3>
              <p className="mt-1 text-xs text-[#888E9B]">{isEs ? 'Costa Rica' : 'Costa Rica'}</p>
              <p className="mt-3 font-semibold text-[#003B73]">{AGENCY_PHONE_DISPLAY_INTL}</p>
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#25D366] transition hover:gap-2"
              >
                {isEs ? 'Abrir chat' : 'Open chat'}
                <span>→</span>
              </a>
            </article>

            {/* WhatsApp UK */}
            <article className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:border-[#25D366] hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366]/10 transition group-hover:bg-[#25D366]/20">
                <MessageCircle size={28} className="text-[#25D366]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#003B73]">WhatsApp</h3>
              <p className="mt-1 text-xs text-[#888E9B]">{isEs ? 'Reino Unido' : 'United Kingdom'}</p>
              <p className="mt-3 font-semibold text-[#003B73]">+44 7735 701311</p>
              <a
                href="https://wa.me/447735701311"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#25D366] transition hover:gap-2"
              >
                {isEs ? 'Abrir chat' : 'Open chat'}
                <span>→</span>
              </a>
            </article>

            {/* Email */}
            <article className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:border-[#005DAA] hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#005DAA]/10 transition group-hover:bg-[#005DAA]/20">
                <Mail size={28} className="text-[#005DAA]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#003B73]">Email</h3>
              <p className="mt-1 text-xs text-[#888E9B]">{isEs ? 'Soporte' : 'Support'}</p>
              <p className="mt-3 font-semibold text-[#003B73]">soporte@voratravel.com</p>
              <a
                href="mailto:soporte@voratravel.com"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#005DAA] transition hover:gap-2"
              >
                {isEs ? 'Enviar correo' : 'Send email'}
                <span>→</span>
              </a>
            </article>

            {/* Office */}
            <article className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:border-[#D6AE5C] hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D6AE5C]/10 transition group-hover:bg-[#D6AE5C]/20">
                <MapPin size={28} className="text-[#D6AE5C]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#003B73]">{isEs ? 'Oficina' : 'Office'}</h3>
              <p className="mt-1 text-xs text-[#888E9B]">Miami, Florida</p>
              <p className="mt-3 text-sm text-[#4B5563]">1110 Brickell Ave #430K-101, Miami, FL 33131</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
                {isEs ? 'Envíanos un mensaje' : 'Send us a message'}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666B7A]">
                {isEs
                  ? 'Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.'
                  : 'Fill out the form and we\'ll get back to you within 24 hours.'}
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#005DAA]/10">
                    <Clock size={24} className="text-[#005DAA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003B73]">{isEs ? 'Horario de atención' : 'Business Hours'}</h3>
                    <p className="mt-1 text-sm text-[#666B7A]">
                      {isEs
                        ? 'Lunes a Viernes: 9:00 AM - 6:00 PM (Hora CR)'
                        : 'Monday to Friday: 9:00 AM - 6:00 PM (CR Time)'}
                    </p>
                    <p className="text-sm text-[#666B7A]">
                      {isEs ? 'Sábados: 9:00 AM - 1:00 PM' : 'Saturdays: 9:00 AM - 1:00 PM'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003B73]">{isEs ? 'Respuesta rápida' : 'Quick Response'}</h3>
                    <p className="mt-1 text-sm text-[#666B7A]">
                      {isEs
                        ? 'Para atención inmediata, usa WhatsApp. Respondemos en minutos.'
                        : 'For immediate assistance, use WhatsApp. We respond within minutes.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D6AE5C]/10">
                    <CheckCircle2 size={24} className="text-[#D6AE5C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003B73]">{isEs ? 'Asesoría personalizada' : 'Personalized Advice'}</h3>
                    <p className="mt-1 text-sm text-[#666B7A]">
                      {isEs
                        ? 'Cada consulta es única. Te ayudaremos a diseñar tu viaje ideal.'
                        : 'Every inquiry is unique. We\'ll help you design your ideal trip.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-lg lg:p-10">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10">
                    <CheckCircle2 size={40} className="text-[#25D366]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#003B73]">
                    {isEs ? '¡Mensaje enviado!' : 'Message sent!'}
                  </h3>
                  <p className="mt-3 text-[#666B7A]">
                    {isEs
                      ? 'Gracias por contactarnos. Te responderemos pronto.'
                      : 'Thank you for contacting us. We\'ll respond soon.'}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#D6AE5C] bg-white px-6 py-3 text-sm font-semibold text-[#003B73] transition hover:bg-[#F5F7FA]"
                  >
                    {isEs ? 'Enviar otro mensaje' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#003B73]">
                        {t('name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#D9DEE8] bg-white px-4 py-3.5 text-sm transition focus:border-[#D6AE5C] focus:outline-none focus:ring-2 focus:ring-[#D6AE5C]/20"
                        placeholder={isEs ? 'Tu nombre completo' : 'Your full name'}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#003B73]">
                        {t('email')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#D9DEE8] bg-white px-4 py-3.5 text-sm transition focus:border-[#D6AE5C] focus:outline-none focus:ring-2 focus:ring-[#D6AE5C]/20"
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#003B73]">{t('phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#D9DEE8] bg-white px-4 py-3.5 text-sm transition focus:border-[#D6AE5C] focus:outline-none focus:ring-2 focus:ring-[#D6AE5C]/20"
                        placeholder="+506 ..."
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#003B73]">{t('destination')}</label>
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#D9DEE8] bg-white px-4 py-3.5 text-sm transition focus:border-[#D6AE5C] focus:outline-none focus:ring-2 focus:ring-[#D6AE5C]/20"
                      >
                        <option value="">{isEs ? 'Seleccionar...' : 'Select...'}</option>
                        {destinationOptions.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#003B73]">
                      {t('message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('messagePlaceholder')}
                      className="w-full resize-none rounded-xl border border-[#D9DEE8] bg-white px-4 py-3.5 text-sm transition focus:border-[#D6AE5C] focus:outline-none focus:ring-2 focus:ring-[#D6AE5C]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#005DAA] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#004f90] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        {t('sending')}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t('send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003B73] py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {isEs ? '¿Prefieres hablar directamente?' : 'Prefer to talk directly?'}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {isEs
              ? 'Estamos disponibles por WhatsApp para responder tus preguntas al instante.'
              : 'We\'re available on WhatsApp to answer your questions instantly.'}
          </p>
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#20BD5A]"
          >
            <MessageCircle size={22} />
            {isEs ? 'Abrir WhatsApp' : 'Open WhatsApp'}
          </a>
        </div>
      </section>
    </>
  )
}
