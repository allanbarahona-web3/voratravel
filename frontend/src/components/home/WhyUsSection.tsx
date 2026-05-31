'use client'

import { useTranslations } from 'next-intl'
import { Award, Heart, Globe, Shield } from 'lucide-react'

export default function WhyUsSection() {
  const t = useTranslations('home')

  const features = [
    {
      icon: <Award size={28} className="text-brand-gold" />,
      titleKey: 'feature1Title' as const,
      descKey: 'feature1Desc' as const,
    },
    {
      icon: <Heart size={28} className="text-brand-gold" />,
      titleKey: 'feature2Title' as const,
      descKey: 'feature2Desc' as const,
    },
    {
      icon: <Globe size={28} className="text-brand-gold" />,
      titleKey: 'feature3Title' as const,
      descKey: 'feature3Desc' as const,
    },
    {
      icon: <Shield size={28} className="text-brand-gold" />,
      titleKey: 'feature4Title' as const,
      descKey: 'feature4Desc' as const,
    },
  ]

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30 rounded-full px-5 py-2 mb-4 text-sm font-semibold">
            ⭐ Voratravel
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('whyUs')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
