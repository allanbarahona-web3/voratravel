import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Building2, CalendarClock, Users } from 'lucide-react'
import HeroCtaModal from '@/components/ui/HeroCtaModal'

export const dynamic = 'force-dynamic'

type RoutePageProps = {
  params: Promise<{ locale: string }>
}

const heroImage = '/images/mexico/ruta_colonial_mexicana_hero.webp'

export default async function RutaColonialMexicaPage({ params }: RoutePageProps) {
  const { locale } = await params
  const isEs = locale === 'es'

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-navy-light via-brand-navy to-brand-navy text-white">
      <section className="relative overflow-hidden pt-28 pb-24">
        <Image
          src={heroImage}
          alt={isEs ? 'Ruta Colonial Mexica' : 'Mexican Colonial Route'}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-navy/12 to-brand-navy/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
            <Building2 size={14} />
            {isEs ? 'Nueva Ruta En Mexico' : 'New Route In Mexico'}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            {isEs ? 'Ruta Colonial Mexica' : 'Mexican Colonial Route'}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 md:text-lg">
            {isEs
              ? 'CDMX, Guanajuato, Leon y Guadalajara en una experiencia cultural de 8 dias con grupo reducido y acompanamiento de Voratravel.'
              : 'Mexico City, Guanajuato, Leon and Guadalajara in an 8-day cultural experience with a small group and Voratravel support.'}
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <CalendarClock className="mx-auto mb-2" size={18} />
              {isEs ? 'Duracion: 8 dias' : 'Duration: 8 days'}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <Users className="mx-auto mb-2" size={18} />
              {isEs ? 'Maximo 15 pasajeros' : 'Maximum 15 travelers'}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <Building2 className="mx-auto mb-2" size={18} />
              {isEs ? 'CDMX · Guanajuato · Leon · Guadalajara' : 'Mexico City · Guanajuato · Leon · Guadalajara'}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/90">
            <p className="font-semibold">
              {isEs ? 'Salidas confirmadas:' : 'Confirmed departures:'}
            </p>
            <p className="mt-1">
              {isEs
                ? '27 Feb 2027 al 06 Mar 2027 (8 dias)'
                : 'Feb 27, 2027 to Mar 06, 2027 (8 days)'}
            </p>
            <p>
              {isEs
                ? '06 Mar 2027 al 13 Mar 2027 (8 dias)'
                : 'Mar 06, 2027 to Mar 13, 2027 (8 days)'}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <HeroCtaModal
              tourSlug="ruta-colonial-mexica"
              tourName={{
                es: 'Ruta Colonial Mexica',
                en: 'Mexican Colonial Route',
              }}
              triggerLabel={{
                es: 'Reservar o hablar con asesor',
                en: 'Book now or talk to an advisor',
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
