'use client'

import { useTranslations } from 'next-intl'
import TourCard from '@/components/tours/TourCard'
import { getPublishedTours } from '@/lib/data'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

export default function FeaturedTours() {
  const t = useTranslations('home')
  const tCommon = useTranslations('common')
  const featuredTours = getPublishedTours().filter((tour) => tour.featured)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full px-5 py-2 mb-4 text-sm font-semibold">
            ✈️ {t('featuredTours')}
          </div>
          <h2 className="section-title mb-4">{t('featuredTours')}</h2>
          <p className="section-subtitle mx-auto">{t('featuredToursDesc')}</p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* See All CTA */}
        <div className="text-center mt-12">
          <Link href="/tours" className="btn-outline group inline-flex items-center gap-2">
            {tCommon('seeAll')} Tours
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
