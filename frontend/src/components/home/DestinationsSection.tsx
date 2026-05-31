'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { costaRicaDestinations } from '@/lib/data'
import { Link } from '@/i18n/navigation'

const europeDestinations = [
  {
    name: 'Madrid',
    image: 'https://images.unsplash.com/photo-1543158266-0066955047b1?w=800&q=80',
    flag: '🇪🇸',
  },
  {
    name: 'Roma',
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80',
    flag: '🇮🇹',
  },
  {
    name: 'Suiza',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    flag: '🇨🇭',
  },
  {
    name: 'Eslovenia',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
    flag: '🇸🇮',
  },
]

export default function DestinationsSection() {
  const t = useTranslations('home')
  const locale = useLocale() as 'es' | 'en'

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-navy/10 text-brand-navy border border-brand-navy/20 rounded-full px-5 py-2 mb-4 text-sm font-semibold">
            🌍 {t('destinationsTitle')}
          </div>
          <h2 className="section-title mb-4">{t('destinationsTitle')}</h2>
          <p className="section-subtitle mx-auto">{t('destinationsDesc')}</p>
        </div>

        {/* Costa Rica Block */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🦜</span>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-navy">Costa Rica</h3>
                <p className="text-gray-500 text-sm">Pura Vida · Biodiversidad · Aventura</p>
              </div>
            </div>
            <Link href="/tours" className="text-brand-gold font-semibold text-sm hover:underline hidden sm:flex items-center gap-1">
              Ver tours →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {costaRicaDestinations.map((dest) => (
              <div key={dest.name} className="group relative rounded-2xl overflow-hidden h-52 cursor-pointer">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-base">{dest.name}</h4>
                  <p className="text-white/70 text-xs line-clamp-1">{dest.description[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Europe Block */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏰</span>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-navy">Europa</h3>
                <p className="text-gray-500 text-sm">Arte · Historia · Cultura · Naturaleza</p>
              </div>
            </div>
            <Link href="/tours" className="text-brand-gold font-semibold text-sm hover:underline hidden sm:flex items-center gap-1">
              Ver tours →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {europeDestinations.map((dest) => (
              <div key={dest.name} className="group relative rounded-2xl overflow-hidden h-52 cursor-pointer">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-base">
                    {dest.flag} {dest.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
