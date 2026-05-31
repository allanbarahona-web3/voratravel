'use client'

import { MessageCircle } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { buildDefaultTravelWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

type Locale = 'es' | 'en'

export default function WhatsAppFloatingBubble() {
  const t = useTranslations('whatsappBubble')
  const locale = useLocale() as Locale

  const whatsappUrl = buildWhatsAppUrl(buildDefaultTravelWhatsAppMessage(locale))

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('ariaLabel')}
        title={t('tooltip')}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.5)] transition-transform duration-200 hover:scale-105 hover:bg-[#1eb85b] focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
      >
        <MessageCircle size={28} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0f172a] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          {t('tooltip')}
        </span>
      </a>
    </div>
  )
}
