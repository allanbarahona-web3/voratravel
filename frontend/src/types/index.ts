export type TourTravelType = 'national-cr' | 'outbound-from-cr'

export type TourRegion = 'costa-rica' | 'europe' | 'central-america' | 'other'

export interface Tour {
  id: string
  slug: string
  publicPath?: string
  published: boolean
  travelType: TourTravelType
  region: TourRegion
  featured: boolean
  image: string
  gallery: string[]
  title: { es: string; en: string }
  subtitle: { es: string; en: string }
  description: { es: string; en: string }
  duration: number
  price: number
  currency: string
  maxGroupSize: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  rating: number
  reviewCount: number
  destinations: string[]
  highlights: { es: string[]; en: string[] }
  includes: { es: string[]; en: string[] }
  excludes: { es: string[]; en: string[] }
  itinerary: ItineraryDay[]
  upcomingDates: string[]
  badge?: { es: string; en: string }
  experiences?: TourExperience[]
}

export interface ItineraryDay {
  day: number
  location: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  activities: { es: string[]; en: string[] }
  overnight: { es: string; en: string }
}

export interface TourExperience {
  id: string
  image: string
  quote: { es: string; en: string }
  name: string
  city?: string
}

export interface InsurancePlan {
  id: string
  name: { es: string; en: string }
  description: { es: string; en: string }
  pricePerDay: number
  features: { es: string[]; en: string[] }
  maxCoverage: number
  recommended: boolean
}

export interface Testimonial {
  id: string
  name: string
  country: string
  avatar: string
  rating: number
  tour: { es: string; en: string }
  text: { es: string; en: string }
}
