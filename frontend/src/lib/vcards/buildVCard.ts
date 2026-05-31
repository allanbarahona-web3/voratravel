import type { VCardContact } from '@/types/vcard'

/** Sanitize a vCard field value: trim, remove null/undefined, escape special chars */
function sanitize(value: string | undefined | null): string {
  if (!value) return ''
  return value.trim().replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

/**
 * Build a valid vCard 3.0 string from a VCardContact object.
 * Spec: https://datatracker.ietf.org/doc/html/rfc2426
 */
export function buildVCard(contact: VCardContact): string {
  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${sanitize(contact.name)}`,
    `N:${sanitize(contact.name.split(' ').slice(1).join(' '))};${sanitize(contact.name.split(' ')[0])};;;`,
    `ORG:${sanitize(contact.company)}`,
    `TITLE:${sanitize(contact.title)}`,
    `TEL;TYPE=CELL:${sanitize(contact.phone)}`,
  ]

  if (contact.phoneWork) {
    lines.push(`TEL;TYPE=WORK:${sanitize(contact.phoneWork)}`)
  }

  if (contact.phoneUSA) {
    lines.push(`TEL;TYPE=WORK,pref:${sanitize(contact.phoneUSA)}`)
  }

  if (contact.phoneCR) {
    lines.push(`TEL;TYPE=HOME:${sanitize(contact.phoneCR)}`)
  }

  lines.push(`EMAIL;TYPE=INTERNET:${sanitize(contact.email)}`)

  if (contact.website) {
    lines.push(`URL:${sanitize(contact.website)}`)
  }

  if (contact.note) {
    lines.push(`NOTE:${sanitize(contact.note)}`)
  }

  lines.push('END:VCARD')

  // vCard lines must be terminated with CRLF per spec
  return lines.join('\r\n') + '\r\n'
}
