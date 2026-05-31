import { getTranslations } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import InsuranceQuoteForm from '@/components/insurance/InsuranceQuoteForm'

export default async function InsurancePage() {
  const t = await getTranslations('insurance')
  const locale = (await getLocale()) as 'es' | 'en'

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6 text-sm font-medium">
            🛡️ {t('title')}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          <p className="text-white/50 text-sm mt-3">
            {locale === 'es'
              ? 'Complete el formulario y reciba su cotización personalizada en menos de 24 horas.'
              : 'Fill out the form and receive your personalized quote in less than 24 hours.'}
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-12 bg-gray-50">
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
