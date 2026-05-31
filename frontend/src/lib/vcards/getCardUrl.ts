const BASE_URL = 'https://www.voratravel.com'

/** Returns the full public URL for a contact card page */
export function getCardUrl(slug: string): string {
  return `${BASE_URL}/card/${slug}`
}
