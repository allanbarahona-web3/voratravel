'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import Image from 'next/image'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getPublishedTours, getTourHref } from '@/lib/data'
import { buildDefaultTravelWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

const LOGO_WHITE = '/Logo%20Vora%20Travel%20BLANCO%20Transp.png'
const LOGO_NAVY = '/Logo%20Vora%20Travel%20AZUL%20MARINO%20Transp.png'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const currentLocale = locale as 'es' | 'en'
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const publishedTours = getPublishedTours()
  
  // Agrupar tours por región geográfica
  const europeTours = publishedTours.filter((tour) => tour.region === 'europe')
  const americaTours = publishedTours.filter((tour) => tour.region === 'other')
  const domesticTours = publishedTours.filter((tour) => tour.travelType === 'national-cr')
  
  const regionNames = {
    es: {
      europe: 'Europa',
      america: 'América',
      domestic: 'Costa Rica',
    },
    en: {
      europe: 'Europe',
      america: 'Americas',
      domestic: 'Costa Rica',
    },
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const next = locale === 'es' ? 'en' : 'es'
    router.push(`/${next}${pathname}`)
  }

  const navLinks = [
    { href: '/tours' as const, label: t('tours') },
    { href: '/insurance' as const, label: t('insurance') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ]

  const logoSrc = scrolled || isOpen ? LOGO_NAVY : LOGO_WHITE
  const bookNowWhatsAppUrl = buildWhatsAppUrl(buildDefaultTravelWhatsAppMessage(currentLocale))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/tours" className="flex items-center">
            <div className="relative h-14 w-48 sm:h-16 sm:w-56">
              <Image
                src={logoSrc}
                alt="Voratravel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button
                className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 ${
                  scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold-light'
                }`}
              >
                {t('tours')}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-card-hover overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/tours"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold transition-colors"
                >
                  {locale === 'es' ? 'Ver todos los tours' : 'View all tours'}
                </Link>

                {europeTours.length > 0 && (
                  <div className="border-t border-gray-100 px-4 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {regionNames[currentLocale].europe}
                    </p>
                    <div className="mt-2 flex flex-col">
                      {europeTours.map((tour) => (
                        <Link
                          key={tour.id}
                          href={getTourHref(tour) as '/'}
                          className="px-2 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded transition-colors"
                        >
                          {tour.title[currentLocale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {americaTours.length > 0 && (
                  <div className="border-t border-gray-100 px-4 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {regionNames[currentLocale].america}
                    </p>
                    <div className="mt-2 flex flex-col">
                      {americaTours.map((tour) => (
                        <Link
                          key={tour.id}
                          href={getTourHref(tour) as '/'}
                          className="px-2 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded transition-colors"
                        >
                          {tour.title[currentLocale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {domesticTours.length > 0 && (
                  <div className="border-t border-gray-100 px-4 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {regionNames[currentLocale].domestic}
                    </p>
                    <div className="mt-2 flex flex-col">
                      {domesticTours.map((tour) => (
                        <Link
                          key={tour.id}
                          href={getTourHref(tour) as '/'}
                          className="px-2 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded transition-colors"
                        >
                          {tour.title[currentLocale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {navLinks.filter((link) => link.href !== '/tours').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 ${
                  scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold-light'
              }`}
            >
              <Globe size={16} />
              {t('language')}
            </button>

            {/* CTA Button */}
            <a
              href={bookNowWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-6"
            >
              {t('bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-brand-navy hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {publishedTours.length > 0 && (
                <div className="px-4 py-2 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                    {locale === 'es' ? 'Tours por región' : 'Tours by region'}
                  </p>
                  
                  {europeTours.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-brand-navy/60 mb-1">
                        {regionNames[currentLocale].europe}
                      </p>
                      <div className="flex flex-col gap-1">
                        {europeTours.map((tour) => (
                          <Link
                            key={tour.id}
                            href={getTourHref(tour) as '/'}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded-md transition-colors"
                          >
                            {tour.title[currentLocale]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {americaTours.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-brand-navy/60 mb-1">
                        {regionNames[currentLocale].america}
                      </p>
                      <div className="flex flex-col gap-1">
                        {americaTours.map((tour) => (
                          <Link
                            key={tour.id}
                            href={getTourHref(tour) as '/'}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded-md transition-colors"
                          >
                            {tour.title[currentLocale]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {domesticTours.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-brand-navy/60 mb-1">
                        {regionNames[currentLocale].domestic}
                      </p>
                      <div className="flex flex-col gap-1">
                        {domesticTours.map((tour) => (
                          <Link
                            key={tour.id}
                            href={getTourHref(tour) as '/'}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-brand-navy hover:bg-brand-cream hover:text-brand-gold rounded-md transition-colors"
                          >
                            {tour.title[currentLocale]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="border-t border-gray-100 mt-2 pt-3 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 text-brand-navy hover:text-brand-gold font-medium"
                >
                  <Globe size={16} />
                  {t('language')}
                </button>
                <a
                  href={bookNowWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm py-2 px-5"
                >
                  {t('bookNow')}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
