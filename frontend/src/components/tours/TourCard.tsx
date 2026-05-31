import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { Tour } from '@/types'
import { Calendar, Users, Clock, Star, ArrowRight, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { getTourHref } from '@/lib/data'

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const locale = useLocale() as 'es' | 'en'
  const t = useTranslations('tours')
  const isComingSoon = tour.upcomingDates.length === 0

  const regionLabel =
    tour.region === 'costa-rica'
      ? locale === 'es' ? 'Costa Rica' : 'Costa Rica'
      : tour.region === 'europe'
        ? locale === 'es' ? 'Europa' : 'Europe'
        : tour.region === 'central-america'
          ? locale === 'es' ? 'Centroamerica' : 'Central America'
          : locale === 'es' ? 'America' : 'America'

  const travelTypeLabel =
    tour.travelType === 'national-cr'
      ? locale === 'es' ? 'Nacional CR' : 'Domestic CR'
      : locale === 'es' ? 'Desde CR' : 'From CR'

  return (
    <div className="card group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title[locale]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {tour.badge && (
            <span className="badge bg-brand-gold text-white font-semibold text-xs px-3 py-1 rounded-full shadow-gold">
              {tour.badge[locale]}
            </span>
          )}
          <span className="badge-navy text-xs px-3 py-1">
            {travelTypeLabel} · {regionLabel}
          </span>
        </div>
        {/* Rating overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star size={12} className="fill-brand-gold text-brand-gold" />
          <span className="text-xs font-semibold text-brand-navy">{tour.rating}</span>
          <span className="text-xs text-gray-500">({tour.reviewCount})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Destinations */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={13} className="text-brand-gold shrink-0" />
          <p className="text-xs text-gray-500 truncate">
            {tour.destinations.slice(0, 4).join(' · ')}
            {tour.destinations.length > 4 && ` +${tour.destinations.length - 4}`}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-brand-navy text-lg leading-snug mb-2 line-clamp-2 flex-shrink-0">
          {tour.title[locale]}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {tour.subtitle[locale]}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-t border-b border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Clock size={14} className="text-brand-gold mb-1" />
            <span className="text-xs font-semibold text-brand-navy">{tour.duration}</span>
            <span className="text-xs text-gray-400">{t('days')}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users size={14} className="text-brand-gold mb-1" />
            <span className="text-xs font-semibold text-brand-navy">Max {tour.maxGroupSize}</span>
            <span className="text-xs text-gray-400">pax</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar size={14} className="text-brand-gold mb-1" />
            <span className="text-xs font-semibold text-brand-navy">{tour.upcomingDates.length}</span>
            <span className="text-xs text-gray-400">{locale === 'es' ? 'fechas' : 'dates'}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            {isComingSoon ? (
              <>
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {locale === 'es' ? 'Estado' : 'Status'}
                </span>
                <div className="text-lg font-bold text-brand-gold">
                  {locale === 'es' ? 'Proximamente' : 'Coming Soon'}
                </div>
              </>
            ) : (
              <>
                <span className="text-xs text-gray-400">{t('price')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">
                    ${tour.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400">{tour.currency}</span>
                </div>
                <span className="text-xs text-gray-400">/ {t('person')}</span>
              </>
            )}
          </div>
          <Link
            href={getTourHref(tour) as '/'}
            className="btn-primary text-sm py-2.5 px-5 group/btn"
          >
            {isComingSoon
              ? locale === 'es' ? 'Ver avance' : 'Preview'
              : t('viewDetails')}
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
