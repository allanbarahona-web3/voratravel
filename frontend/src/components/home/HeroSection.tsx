'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const t = useTranslations('hero')
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <Image
        src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1920&q=90"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated Particles / Bokeh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-gold/10 animate-pulse"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${10 + i * 13}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-sm font-medium tracking-wide">{t('tagline')}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up max-w-5xl mx-auto">
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          {t('subheadline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link href="/tours" className="btn-primary text-base py-4 px-10 group">
            {t('cta')}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/about" className="btn-secondary text-base py-4 px-10">
            {t('ctaSecondary')}
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-white/20 pt-10">
          {[
            { value: '15+', label: 'Años de experiencia / Years of experience' },
            { value: '2000+', label: 'Viajeros felices / Happy travelers' },
            { value: '30+', label: 'Destinos / Destinations' },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="font-display text-3xl font-bold text-brand-gold-light">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
