'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { getPublishedTours } from '@/lib/data'
import TourCard from '@/components/tours/TourCard'
import HeroCtaModal from '@/components/ui/HeroCtaModal'
import { Search } from 'lucide-react'
import type { Tour } from '@/types'

type FilterValue = 'all' | Tour['travelType'] | Tour['region']

function getTravelTypeLabel(value: Tour['travelType'], locale: 'es' | 'en') {
  if (value === 'national-cr') {
    return locale === 'es' ? 'Nacionales en Costa Rica' : 'Domestic in Costa Rica'
  }

  return locale === 'es' ? 'Salidas desde Costa Rica' : 'Departures from Costa Rica'
}

function getRegionLabel(value: Tour['region'], locale: 'es' | 'en') {
  if (value === 'costa-rica') return 'Costa Rica'
  if (value === 'europe') return locale === 'es' ? 'Europa' : 'Europe'
  if (value === 'central-america') return locale === 'es' ? 'Centroamerica' : 'Central America'
  return locale === 'es' ? 'America' : 'America'
}

export default function ToursPage() {
  const t = useTranslations('tours')
  const locale = useLocale() as 'es' | 'en'
  const publishedTours = getPublishedTours()
  const [activeTravelType, setActiveTravelType] = useState<FilterValue>('all')
  const [activeRegion, setActiveRegion] = useState<FilterValue>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const travelTypes = Array.from(new Set(publishedTours.map((tour) => tour.travelType)))
  const regions = Array.from(new Set(publishedTours.map((tour) => tour.region)))

  const filtered = publishedTours.filter((tour) => {
    const matchesTravelType = activeTravelType === 'all' || tour.travelType === activeTravelType
    const matchesRegion = activeRegion === 'all' || tour.region === activeRegion
    const matchesSearch =
      searchQuery === '' ||
      tour.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTravelType && matchesRegion && matchesSearch
  })

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-navy">
        <Image
          src="https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1920&q=80"
          alt="Tours Vora Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6 text-sm font-medium">
            ✈️ {t('title')}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
          <div className="mt-8 flex justify-center">
            <HeroCtaModal
              tourSlug="general-tours-hero"
              tourName={{
                es: 'Tours Voratravel',
                en: 'Voratravel Tours',
              }}
              triggerLabel={{
                es: 'Reservar ahora o hablar con asesor',
                en: 'Book now or contact an advisor',
              }}
              triggerClassName="inline-flex items-center justify-center rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold-dark"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {locale === 'es' ? 'Tipo de salida:' : 'Departure type:'}
              </span>
              <button
                onClick={() => setActiveTravelType('all')}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTravelType === 'all'
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-cream hover:text-brand-navy'
                }`}
              >
                {locale === 'es' ? 'Todos' : 'All'}
              </button>
              {travelTypes.map((travelType) => (
                <button
                  key={travelType}
                  onClick={() => setActiveTravelType(travelType)}
                  className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTravelType === travelType
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-brand-cream hover:text-brand-navy'
                  }`}
                >
                  {getTravelTypeLabel(travelType, locale)}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {locale === 'es' ? 'Region:' : 'Region:'}
                </span>
                <button
                  onClick={() => setActiveRegion('all')}
                  className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeRegion === 'all'
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-brand-cream hover:text-brand-navy'
                  }`}
                >
                  {locale === 'es' ? 'Todas' : 'All'}
                </button>
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeRegion === region
                        ? 'bg-brand-navy text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-brand-cream hover:text-brand-navy'
                    }`}
                  >
                    {getRegionLabel(region, locale)}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={locale === 'es' ? 'Buscar destino o tour...' : 'Search destination or tour...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg">{locale === 'es' ? 'No se encontraron tours' : 'No tours found'}</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-8">
                {filtered.length} {locale === 'es' ? 'tours disponibles' : 'tours available'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
