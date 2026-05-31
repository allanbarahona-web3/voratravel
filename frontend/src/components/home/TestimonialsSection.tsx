'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  const t = useTranslations('home')
  const locale = useLocale() as 'es' | 'en'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full px-5 py-2 mb-4 text-sm font-semibold">
            ⭐ Reviews
          </div>
          <h2 className="section-title">{t('testimonials')}</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-brand-cream rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-brand-gold/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Tour badge */}
              <span className="badge-gold text-xs mb-4 inline-block">
                ✈️ {testimonial.tour[locale]}
              </span>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                {testimonial.text[locale]}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
