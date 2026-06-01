import { getTranslations } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import InsuranceQuoteForm from '@/components/insurance/InsuranceQuoteForm'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Link } from '@/i18n/navigation'

export default async function InsurancePage() {
  const t = await getTranslations('insurance')
  const locale = (await getLocale()) as 'es' | 'en'
  const insuranceHelpMessage =
    locale === 'es'
      ? 'Hola, quiero informacion sobre seguros de viaje (internacional y nacional).'
      : 'Hello, I want information about travel insurance (international and domestic).'
  const insuranceHelpUrl = buildWhatsAppUrl(insuranceHelpMessage)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-navy text-white overflow-hidden">
        <Image
          src="/Seguros /Hero Adicionales WEB.png"
          alt="Seguros de Viaje Vora Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/18 via-brand-navy/12 to-brand-navy/25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-tight">{t('title')}</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          <p className="text-white/75 text-sm mt-3">
            {locale === 'es'
              ? 'Atendemos solicitudes de seguros de viaje internacional y nacional. Respuesta en menos de 5 minutos.'
              : 'We handle international and domestic travel insurance requests. Response in under 5 minutes.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#cotizacion-seguros"
              className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold-dark"
            >
              {locale === 'es' ? 'Solicitar cotizacion' : 'Request quote'}
            </Link>
            <a
              href={insuranceHelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#005DAA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#004f90]"
            >
              {locale === 'es' ? 'Hablar con un asesor' : 'Talk to an advisor'}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="font-display text-2xl font-bold text-brand-navy text-center">
            {locale === 'es' ? 'Coberturas de Referencia' : 'Coverage Reference'}
          </h2>
          <p className="text-center text-gray-500 text-sm mt-2">
            {locale === 'es'
              ? 'Basado en planes de asistencia al viajero: la cobertura final depende del plan seleccionado.'
              : 'Based on traveler assistance plans: final coverage depends on the selected plan.'}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Asistencia medica internacional (incluye COVID-19)' : 'International medical assistance (includes COVID-19)'}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Equipaje y documentos: demora, extravio o robo' : 'Baggage and documents: delay, loss or theft'}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Cancelacion e interrupcion de viaje (segun plan)' : 'Trip cancellation and interruption (plan-dependent)'}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Repatriacion sanitaria y traslados medicos' : 'Medical repatriation and medical transport'}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Asistencia legal en emergencias de viaje' : 'Legal assistance in travel emergencies'}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {locale === 'es' ? 'Cobertura para actividades deportivas (segun plan)' : 'Sports activities coverage (plan-dependent)'}
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="cotizacion-seguros" className="py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsuranceQuoteForm locale={locale} />
          <p className="text-center text-xs text-gray-400 mt-8">
            {locale === 'es'
              ? '* Precios orientativos en USD. El costo final puede variar según edad del viajero y condiciones específicas del destino.'
              : '* Indicative prices in USD. Final cost may vary based on traveler age and specific destination conditions.'}
          </p>
        </div>
      </section>
    </>
  )
}
