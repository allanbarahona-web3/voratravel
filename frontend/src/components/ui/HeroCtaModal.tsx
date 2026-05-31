'use client'

import { useMemo, useState } from 'react'
import { useLocale } from 'next-intl'
import { X } from 'lucide-react'
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

type Locale = 'es' | 'en'
type ActionType = 'BOOK_NOW' | 'CONTACT_ADVISOR'
type DateOption = string | { value: string; label: { es: string; en: string } }

interface HeroCtaModalProps {
  tourName: { es: string; en: string }
  tourSlug: string
  triggerLabel: { es: string; en: string }
  triggerClassName?: string
  availableDates?: DateOption[]
}

interface HeroCtaLeadPayload {
  actionType: ActionType
  tourSlug: string
  tourName: string
  selectedDate?: string
  locale: Locale
  sourcePage: string
}

function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001'
}

export default function HeroCtaModal({
  tourName,
  tourSlug,
  triggerLabel,
  triggerClassName,
  availableDates = [],
}: HeroCtaModalProps) {
  const locale = useLocale() as Locale
  const dateOptions = availableDates.map((option) =>
    typeof option === 'string'
      ? { value: option, label: { es: option, en: option } }
      : option,
  )
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]?.value ?? '')
  const [submitting, setSubmitting] = useState<ActionType | null>(null)

  const hasDates = dateOptions.length > 0

  const ctaText = useMemo(
    () => ({
      title: locale === 'es' ? 'Elige como quieres continuar' : 'Choose how you want to continue',
      subtitle:
        locale === 'es'
          ? 'Selecciona una opcion y te llevamos al formulario con la informacion lista.'
          : 'Select an option and we will send you to the form with prefilled details.',
      dateLabel: locale === 'es' ? 'Salida preferida' : 'Preferred departure',
      reserveNow: locale === 'es' ? 'Reservar ahora' : 'Book now',
      contactAdvisor: locale === 'es' ? 'Contactar con un Asesor' : 'Contact an Advisor',
      close: locale === 'es' ? 'Cerrar' : 'Close',
      cancel: locale === 'es' ? 'Cancelar' : 'Cancel',
      loading: locale === 'es' ? 'Procesando...' : 'Processing...',
    }),
    [locale],
  )

  async function registerLead(actionType: ActionType) {
    const payload: HeroCtaLeadPayload = {
      actionType,
      tourSlug,
      tourName: tourName[locale],
      selectedDate: hasDates ? selectedDate : undefined,
      locale,
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/tours',
    }

    try {
      await fetch(`${getApiBaseUrl()}/hero-cta-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // Do not block conversion if tracking endpoint is temporarily unavailable.
    }
  }

  async function handleAction(actionType: ActionType) {
    setSubmitting(actionType)
    await registerLead(actionType)

    const message = buildTourWhatsAppMessage({
      locale,
      tourName: tourName[locale],
      intent: actionType,
      selectedDate: hasDates ? selectedDate : undefined,
    })

    window.location.href = buildWhatsAppUrl(message)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          'inline-flex items-center justify-center rounded-xl bg-[#005DAA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004f90]'
        }
      >
        {triggerLabel[locale]}
      </button>

      {open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0b172a]/75 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-[#D9DEE8] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-navy">{ctaText.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{ctaText.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-gray-200 p-2 text-gray-500 transition hover:bg-gray-50"
                aria-label={ctaText.close}
              >
                <X size={16} />
              </button>
            </div>

            {hasDates && (
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-semibold text-brand-navy">{ctaText.dateLabel}</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {dateOptions.map((dateOption) => (
                    <option key={dateOption.value} value={dateOption.value}>
                      {dateOption.label[locale]}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => handleAction('BOOK_NOW')}
                disabled={submitting !== null}
                className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting === 'BOOK_NOW' ? ctaText.loading : ctaText.reserveNow}
              </button>
              <button
                type="button"
                onClick={() => handleAction('CONTACT_ADVISOR')}
                disabled={submitting !== null}
                className="inline-flex items-center justify-center rounded-xl bg-[#005DAA] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#004f90] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting === 'CONTACT_ADVISOR' ? ctaText.loading : ctaText.contactAdvisor}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              {ctaText.cancel}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
