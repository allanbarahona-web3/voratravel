import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { CalendarClock, PlaneTakeoff, Sparkles } from 'lucide-react'
import HeroCtaModal from '@/components/ui/HeroCtaModal'

export const dynamic = 'force-dynamic'

type Locale = 'es' | 'en'

interface ComingSoonPageProps {
  params: Promise<{ locale: string }>
}

const heroImage = '/images/Gran Ruta Mediterranea/Hero Ruta Mediterranea.webp'

export default async function ComingSoonTourPage({ params }: ComingSoonPageProps) {
  const { locale } = await params
  const isEs = locale === 'es'

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-navy-light via-brand-navy to-brand-navy text-white">
      <section className="relative overflow-hidden pt-28 pb-24">
        <Image
          src={heroImage}
          alt={isEs ? 'Proximo tour: Madrid, Turquia, Egipto y Grecia' : 'Upcoming tour: Madrid, Turkey, Egypt and Greece'}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-navy/12 to-brand-navy/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
            <Sparkles size={14} />
            {isEs ? 'Nuevo Tour en Planificacion' : 'New Tour in Planning'}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            {isEs
              ? 'Madrid, Turquia, Egipto y Grecia'
              : 'Madrid, Turkey, Egypt and Greece'}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 md:text-lg">
            {isEs
              ? 'Estamos planificando este tour para ti. Muy pronto publicaremos itinerario completo, fechas y precio final.'
              : 'We are planning this tour for you. Full itinerary, dates and final pricing will be published very soon.'}
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <PlaneTakeoff className="mx-auto mb-2" size={18} />
              {isEs ? 'Ruta internacional premium' : 'Premium international route'}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <CalendarClock className="mx-auto mb-2" size={18} />
              {isEs ? 'Fechas por confirmar' : 'Dates to be confirmed'}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <Sparkles className="mx-auto mb-2" size={18} />
              {isEs ? 'Lanzamiento proximo' : 'Launch coming soon'}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <HeroCtaModal
              tourSlug="gran-tour-madrid-turquia-egipto-grecia"
              tourName={{
                es: 'Gran Ruta Mediterranea',
                en: 'Mediterranean Grand Route',
              }}
              triggerLabel={{
                es: 'Quiero ser de los primeros',
                en: 'I want early access',
              }}
              triggerClassName="btn-primary px-7 py-3 text-sm"
            />
            <Link
              href="/tours"
              className="rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {isEs ? 'Volver a tours' : 'Back to tours'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
