export type WhatsAppLocale = 'es' | 'en'

export type WhatsAppIntent =
  | 'BOOK_NOW'
  | 'CONTACT_ADVISOR'
  | 'BOOK_ITINERARY'
  | 'RESERVE_DEPOSIT'
  | 'FLOATING_CHAT'

interface BuildTourWhatsAppMessageParams {
  locale: WhatsAppLocale
  tourName: string
  intent: WhatsAppIntent
  selectedDate?: string
  depositAmount?: string
}

const DEFAULT_AGENCY_WHATSAPP_E164 = '50670484949'

function normalizePhoneNumber(value: string): string {
  return value.replace(/\D/g, '')
}

const configuredWhatsAppNumber = normalizePhoneNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '')
export const AGENCY_WHATSAPP_E164 = configuredWhatsAppNumber || DEFAULT_AGENCY_WHATSAPP_E164

const crLocalDigits = AGENCY_WHATSAPP_E164.startsWith('506') && AGENCY_WHATSAPP_E164.length === 11
  ? AGENCY_WHATSAPP_E164.slice(3)
  : ''

export const AGENCY_PHONE_DISPLAY_CR = crLocalDigits.length === 8
  ? `${crLocalDigits.slice(0, 4)} ${crLocalDigits.slice(4)}`
  : '7048 4949'
export const AGENCY_PHONE_E164 = `+${AGENCY_WHATSAPP_E164}`
export const AGENCY_PHONE_DISPLAY_INTL = AGENCY_WHATSAPP_E164.startsWith('506')
  ? `+506 ${AGENCY_PHONE_DISPLAY_CR}`
  : AGENCY_PHONE_E164

function getIntentLabel(intent: WhatsAppIntent, locale: WhatsAppLocale): string {
  if (intent === 'BOOK_NOW') return locale === 'es' ? 'Reservar ahora' : 'Book now'
  if (intent === 'CONTACT_ADVISOR') return locale === 'es' ? 'Contactar con un asesor' : 'Contact an advisor'
  if (intent === 'BOOK_ITINERARY') return locale === 'es' ? 'Reservar itinerario' : 'Book itinerary'
  if (intent === 'FLOATING_CHAT') return locale === 'es' ? 'Consulta general' : 'General inquiry'
  return locale === 'es' ? 'Reserva con deposito' : 'Reserve with deposit'
}

export function buildDefaultTravelWhatsAppMessage(locale: WhatsAppLocale): string {
  return locale === 'es'
    ? 'Hola, quiero informacion para mi viaje.'
    : 'Hello, I want information for my trip.'
}

export function buildTourWhatsAppMessage({
  locale,
  tourName,
  intent,
  selectedDate,
  depositAmount,
}: BuildTourWhatsAppMessageParams): string {
  const opening =
    locale === 'es'
      ? 'Hola, quiero informacion de este tour.'
      : 'Hello, I want details for this tour.'

  return [
    opening,
    `${locale === 'es' ? 'Tour' : 'Tour'}: ${tourName}`,
    `${locale === 'es' ? 'Accion' : 'Action'}: ${getIntentLabel(intent, locale)}`,
    selectedDate ? `${locale === 'es' ? 'Salida' : 'Departure'}: ${selectedDate}` : '',
    depositAmount ? `${locale === 'es' ? 'Deposito' : 'Deposit'}: $${depositAmount}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${AGENCY_WHATSAPP_E164}?text=${encodeURIComponent(message)}`
}
