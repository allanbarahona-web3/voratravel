'use client'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { buildDefaultTravelWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

export default function CTASection() {
  const t = useTranslations('home')
  const locale = useLocale() as 'es' | 'en'
  const whatsappUrl = buildWhatsAppUrl(buildDefaultTravelWhatsAppMessage(locale))

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-brand-navy/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {t('ctaSection')}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          {t('ctaSectionDesc')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-4 px-12 group">
            {t('ctaButton')}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link href="/tours" className="btn-secondary text-base py-4 px-12">
            Ver Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
