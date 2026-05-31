import { notFound, redirect } from 'next/navigation'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { getPublishedTours } from '@/lib/data'
import { Link } from '@/i18n/navigation'
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import {
  Clock, Users, Star, Calendar, MapPin, Check, X, ChevronRight, ArrowLeft
} from 'lucide-react'

interface TourDetailPageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getPublishedTours().map((tour) => ({ slug: tour.slug }))
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug, locale: localeParam } = await params
  const locale = (localeParam as 'es' | 'en') || 'es'
  const t = await getTranslations({ locale, namespace: 'tours' })

  const tour = getPublishedTours().find((t) => t.slug === slug)
  if (!tour) notFound()

  const slugPath = `/tours/${slug}`
  if (tour.publicPath && tour.publicPath !== slugPath) {
    redirect(`/${locale}${tour.publicPath}`)
  }

  const bookTourWhatsAppUrl = buildWhatsAppUrl(
    buildTourWhatsAppMessage({
      locale,
      tourName: tour.title[locale],
      intent: 'BOOK_NOW',
    }),
  )

  return (
    <>
      {/* Hero Gallery */}
      <section className="relative h-[60vh] min-h-[480px] mt-0 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title[locale]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />

        {/* Back Link */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/tours"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={14} />
            {locale === 'es' ? 'Todos los Tours' : 'All Tours'}
          </Link>
        </div>

        {/* Tour Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            {tour.badge && (
              <span className="badge bg-brand-gold text-white text-xs px-3 py-1 rounded-full mr-3 mb-3 inline-block">
                {tour.badge[locale]}
              </span>
            )}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mb-3">
              {tour.title[locale]}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">{tour.subtitle[locale]}</p>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <Star size={14} className="fill-brand-gold text-brand-gold" />
                <span className="font-semibold text-white">{tour.rating}</span>
                <span>({tour.reviewCount} {locale === 'es' ? 'reseñas' : 'reviews'})</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <Clock size={14} className="text-brand-gold" />
                {tour.duration} {t('days')}
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <Users size={14} className="text-brand-gold" />
                Max {tour.maxGroupSize} pax
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <MapPin size={14} className="text-brand-gold" />
                {tour.destinations.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
                  {locale === 'es' ? 'Descripción' : 'Description'}
                </h2>
                <p className="text-gray-600 leading-relaxed">{tour.description[locale]}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">
                  {locale === 'es' ? '¿Qué harás en este tour?' : 'What will you do on this tour?'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights[locale].map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-brand-cream rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-brand-gold" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              {tour.itinerary.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">
                    {t('itinerary')}
                  </h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((day) => (
                      <details key={day.day} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-brand-cream transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm shrink-0">
                              {day.day}
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-brand-gold uppercase tracking-wide block">
                                {day.location}
                              </span>
                              <span className="font-semibold text-brand-navy text-sm">
                                {day.title[locale]}
                              </span>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-gray-400 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-4">
                            {day.description[locale]}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {day.activities[locale].map((act, i) => (
                              <span key={i} className="badge-navy text-xs">{act}</span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-400">
                            🏨 {day.overnight[locale]}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Includes / Excludes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Check size={18} className="text-green-500" />
                    {t('includes')}
                  </h3>
                  <ul className="space-y-2">
                    {tour.includes[locale].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <X size={18} className="text-red-400" />
                    {t('notIncluded')}
                  </h3>
                  <ul className="space-y-2">
                    {tour.excludes[locale].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <X size={14} className="text-red-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-card-hover overflow-hidden">
                {/* Price Header */}
                <div className="bg-brand-navy p-6 text-white">
                  <p className="text-white/70 text-sm mb-1">{t('price')}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-brand-gold-light">
                      ${tour.price.toLocaleString()}
                    </span>
                    <span className="text-white/60 text-sm">{tour.currency}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-1">/ {t('person')}</p>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Clock size={14} className="text-brand-gold" />
                      {t('duration')}
                    </span>
                    <span className="font-semibold text-brand-navy">{tour.duration} {t('days')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Users size={14} className="text-brand-gold" />
                      {t('groupSize')}
                    </span>
                    <span className="font-semibold text-brand-navy">Max {tour.maxGroupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Star size={14} fill="#C8841E" className="text-brand-gold" />
                      {t('difficulty')}
                    </span>
                    <span className="font-semibold text-brand-navy capitalize">{t(tour.difficulty)}</span>
                  </div>

                  {/* Upcoming Dates */}
                  <div>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                      <Calendar size={14} className="text-brand-gold" />
                      {t('dates')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tour.upcomingDates.map((date) => (
                        <span
                          key={date}
                          className="text-xs bg-brand-cream text-brand-navy border border-brand-navy/10 px-3 py-1.5 rounded-full font-medium"
                        >
                          {new Date(date).toLocaleDateString(locale === 'es' ? 'es-CR' : 'en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={bookTourWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-base py-4 mt-2"
                  >
                    {t('bookTour')}
                  </a>

                  <p className="text-center text-xs text-gray-400">
                    {locale === 'es' ? '✓ Sin cargos ocultos · Reserva con $500 de depósito' : '✓ No hidden fees · Book with $500 deposit'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
