import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'
import { getPublishedTours, getTourHref } from '@/lib/data'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale() as 'es' | 'en'
  const routeLinks = getPublishedTours().slice(0, 8)

  const footerLogo = '/Logo%20Vora%20Travel%20BLANCO%20Transp.png'

  return (
    <footer className="bg-brand-navy text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="relative h-14 w-48 sm:h-16 sm:w-56 mb-4">
              <Image
                src={footerLogo}
                alt="Voratravel"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/voratravel" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors duration-200">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com/voratravel" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors duration-200">
                <Facebook size={16} />
              </a>
              <a href="https://youtube.com/@voratravel" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors duration-200">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/tours', label: tNav('tours') },
                { href: '/insurance', label: tNav('insurance') },
                { href: '/about', label: tNav('about') },
                { href: '/contact', label: tNav('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as '/'}
                    className="text-gray-300 hover:text-brand-gold-light text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-gold transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              {locale === 'es' ? 'Rutas' : 'Routes'}
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {routeLinks.map((tour) => (
                <li key={tour.id}>
                  <Link href={getTourHref(tour) as '/'} className="hover:text-brand-gold-light transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-brand-gold transition-all duration-200" />
                    {tour.title[locale].split(':')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span>1110 Brickell Ave # 430K-101<br />Miami, Florida 33131</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+50670484949" className="block hover:text-brand-gold-light transition-colors">
                    🇨🇷 +506 7048 4949
                  </a>
                  <a href="tel:+447735701311" className="block hover:text-brand-gold-light transition-colors">
                    🇬🇧 +44 7735 701311
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:soporte@voratravel.com" className="hover:text-brand-gold-light transition-colors">
                  soporte@voratravel.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            Voratravel by Barmentech LLC - Barmentech Web Design
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-gold-light transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/" className="hover:text-brand-gold-light transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
