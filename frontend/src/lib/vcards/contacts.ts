import type { VCardContact } from '@/types/vcard'

export const contacts: Record<string, VCardContact> = {
  'erick-monge': {
    slug: 'erick-monge',
    name: 'Erick Monge G.',
    company: 'Vora Travel',
    title: 'Travel Advisor',
    phone: '+44 7735 701311',
    phoneUSA: '+1 (786) 391-8722',
    phoneCR: '+506 7006 7572',
    email: 'emonge@voratravel.com',
    website: 'https://www.voratravel.com',
  },
}

export function getContact(slug: string): VCardContact | null {
  return contacts[slug] ?? null
}
