import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { CheckCircle2, Clock3, Plane } from 'lucide-react'
import HeroCtaModal from '@/components/ui/HeroCtaModal'
import ExperiencesSection from '@/components/ExperiencesSection'
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import { tours } from '@/lib/data'

export const dynamic = 'force-dynamic'

type Locale = 'es' | 'en'

interface MedellinPageProps {
  params: Promise<{ locale: string }>
}

interface DayPlan {
  date: string
  title: { es: string; en: string }
  duration?: { es: string; en: string }
  narrative: { es: string; en: string }
  sections: Array<{
    label: { es: string; en: string }
    items: { es: string[]; en: string[] }
  }>
  optional?: { es: string; en: string[] }
  image: string
  transport: 'plane' | 'day'
}

const tourData = tours.find((t) => t.id === 'tour-006')!
const heroImage = '/images/colombia/hero-medellin.webp'

const gallery = [
  {
    image: '/images/colombia/gallery-comuna-13.webp',
    city: { es: 'Comuna 13', en: 'Comuna 13' },
  },
  {
    image: '/images/colombia/gallery-guatape.webp',
    city: { es: 'Guatapé', en: 'Guatapé' },
  },
  {
    image: '/images/colombia/gallery-penol.webp',
    city: { es: 'Piedra del Peñol', en: 'Piedra del Peñol' },
  },
  {
    image: '/images/colombia/gallery-santa-fe.webp',
    city: { es: 'Santa Fe de Antioquia', en: 'Santa Fe de Antioquia' },
  },
  {
    image: '/images/colombia/gallery-metrocable.webp',
    city: { es: 'Metrocable', en: 'Metrocable' },
  },
]

const days: DayPlan[] = [
  {
    date: '1 ENE',
    title: { es: 'VUELO COSTA RICA → MEDELLÍN', en: 'FLIGHT COSTA RICA → MEDELLÍN' },
    narrative: {
      es: 'Nuestra aventura comienza rumbo a Medellín. Nos reuniremos en el aeropuerto para realizar el proceso de documentación y abordar nuestro vuelo internacional con destino a la ciudad de la eterna primavera.',
      en: 'Our adventure begins heading to Medellín. We gather at the airport to check in and board our international flight to the city of eternal spring.',
    },
    sections: [
      {
        label: { es: 'Al llegar a Medellín:', en: 'Upon arrival in Medellín:' },
        items: {
          es: ['Check-in en el hospedaje', 'Tiempo para descansar', 'Comenzar a descubrir la ciudad'],
          en: ['Check-in at accommodation', 'Time to rest', 'Start discovering the city'],
        },
      },
      {
        label: { es: 'Al atardecer realizaremos una salida de bienvenida por:', en: 'In the evening we will have a welcome outing to:' },
        items: {
          es: ['Parque El Poblado', 'Provenza', 'Parque Lleras', 'Cena de bienvenida opcional'],
          en: ['El Poblado Park', 'Provenza', 'Parque Lleras', 'Optional welcome dinner'],
        },
      },
    ],
    image: '/images/colombia/day-01-medellin.webp',
    transport: 'plane',
  },
  {
    date: '2 ENE',
    title: { es: 'CITY TOUR MEDELLÍN + COMUNA 13', en: 'MEDELLÍN CITY TOUR + COMUNA 13' },
    narrative: {
      es: 'Este día conoceremos la historia y transformación de Medellín, una ciudad que pasó de ser una de las más peligrosas del mundo a convertirse en referente de innovación social y urbana en América Latina.',
      en: 'This day we will learn about Medellín\'s history and transformation, a city that went from being one of the world\'s most dangerous to becoming a reference for social and urban innovation in Latin America.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Museo El Castillo',
            'Plaza Botero',
            'Pueblito Paisa',
            'Viaje en Metro',
            'Viaje en Metrocable',
            'Comuna 13',
            'Graffiti Tour',
          ],
          en: [
            'El Castillo Museum',
            'Plaza Botero',
            'Pueblito Paisa',
            'Metro ride',
            'Metrocable ride',
            'Comuna 13',
            'Graffiti Tour',
          ],
        },
      },
      {
        label: { es: 'Durante el tour podremos disfrutar:', en: 'During the tour we can enjoy:' },
        items: {
          es: [
            'Arte urbano',
            'Cultura paisa',
            'Transformación social',
            'Escaleras eléctricas',
            'Vistas panorámicas de la ciudad',
          ],
          en: [
            'Urban art',
            'Paisa culture',
            'Social transformation',
            'Electric stairs',
            'Panoramic city views',
          ],
        },
      },
    ],
    image: '/images/colombia/day-02-comuna13.webp',
    transport: 'day',
  },
  {
    date: '3 ENE',
    title: { es: 'GUATAPÉ Y PIEDRA DEL PEÑOL', en: 'GUATAPÉ AND PIEDRA DEL PEÑOL' },
    narrative: {
      es: 'Visitaremos uno de los destinos más emblemáticos de Colombia. Este día está dedicado a la naturaleza, pueblos coloridos y una de las vistas más espectaculares de Antioquia desde la cima de la Piedra del Peñol.',
      en: 'We visit one of Colombia\'s most emblematic destinations. This day is dedicated to nature, colorful towns, and one of Antioquia\'s most spectacular views from the top of Piedra del Peñol.',
    },
    sections: [
      {
        label: { es: 'En el camino recorreremos:', en: 'On the way we will visit:' },
        items: {
          es: [
            'Alto del Chocho',
            'Granja de llamas',
            'Pueblo del Peñol',
            'Réplica del Viejo Peñol',
            'Casa al Revés',
          ],
          en: [
            'Alto del Chocho',
            'Llama farm',
            'Pueblo del Peñol',
            'Old Peñol replica',
            'Upside Down House',
          ],
        },
      },
      {
        label: { es: 'Piedra del Peñol:', en: 'Piedra del Peñol:' },
        items: {
          es: [
            '740 escalones',
            'Vista espectacular del embalse',
            'Fotografías panorámicas',
            'Experiencia única',
          ],
          en: [
            '740 steps',
            'Spectacular reservoir view',
            'Panoramic photos',
            'Unique experience',
          ],
        },
      },
      {
        label: { es: 'En Guatapé visitaremos:', en: 'In Guatapé we will visit:' },
        items: {
          es: [
            'Calle de los Zócalos',
            'Calle de las Sombrillas',
            'Malecón',
            'Parque Principal',
            'Iglesia de Guatapé',
            'Calle del Recuerdo',
          ],
          en: [
            'Zócalo Street',
            'Umbrella Street',
            'Malecón',
            'Main Park',
            'Guatapé Church',
            'Memory Street',
          ],
        },
      },
    ],
    optional: {
      es: 'TOUR OPCIONAL',
      en: ['OPTIONAL TOUR'],
    },
    image: '/images/colombia/day-03-guatape.webp',
    transport: 'day',
  },
  {
    date: '4 ENE',
    title: { es: 'DÍA LIBRE EN MEDELLÍN', en: 'FREE DAY IN MEDELLÍN' },
    narrative: {
      es: 'Hoy podremos disfrutar Medellín a nuestro ritmo. Este día está pensado para descansar, hacer compras o sumar una experiencia adicional según el interés de cada viajero.',
      en: 'Today we can enjoy Medellín at our own pace. This day is designed to rest, go shopping, or add an additional experience according to each traveler\'s interests.',
    },
    sections: [
      {
        label: { es: 'Opciones recomendadas:', en: 'Recommended options:' },
        items: {
          es: [
            'Compras en centros comerciales',
            'Provenza',
            'El Poblado',
            'Cafeterías',
            'Gastronomía paisa',
            'Tiempo libre personal',
          ],
          en: [
            'Shopping in malls',
            'Provenza',
            'El Poblado',
            'Cafés',
            'Paisa gastronomy',
            'Personal free time',
          ],
        },
      },
    ],
    optional: {
      es: 'TOURS OPCIONALES',
      en: ['OPTIONAL TOURS'],
    },
    image: '/images/colombia/day-04-libre.webp',
    transport: 'day',
  },
  {
    date: '5 ENE',
    title: { es: 'SANTA FE DE ANTIOQUIA', en: 'SANTA FE DE ANTIOQUIA' },
    narrative: {
      es: 'Hoy viajaremos hacia uno de los pueblos patrimoniales más importantes de Colombia. Será un día para disfrutar la arquitectura colonial, calles empedradas y la historia de Antioquia.',
      en: 'Today we travel to one of Colombia\'s most important heritage towns. It will be a day to enjoy colonial architecture, cobblestone streets, and Antioquia\'s history.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'San Jerónimo',
            'Centro Histórico',
            'Museo Juan del Corral',
            'Iglesia Santa Bárbara',
            'Catedral Basílica de la Inmaculada Concepción',
            'Iglesia Nuestra Señora de Chiquinquirá',
            'Puente de Occidente',
          ],
          en: [
            'San Jerónimo',
            'Historic Center',
            'Juan del Corral Museum',
            'Santa Bárbara Church',
            'Immaculate Conception Cathedral Basilica',
            'Our Lady of Chiquinquirá Church',
            'Western Bridge',
          ],
        },
      },
      {
        label: { es: 'Por la noche:', en: 'In the evening:' },
        items: {
          es: [
            'Regreso a Medellín',
            'Cena de despedida',
            'Tiempo libre',
          ],
          en: [
            'Return to Medellín',
            'Farewell dinner',
            'Free time',
          ],
        },
      },
    ],
    image: '/images/colombia/day-05-santafe.webp',
    transport: 'day',
  },
  {
    date: '6 ENE',
    title: { es: 'MEDELLÍN → COSTA RICA', en: 'MEDELLÍN → COSTA RICA' },
    narrative: {
      es: 'Después del desayuno nos trasladaremos al aeropuerto para abordar nuestro vuelo de regreso. Nos despediremos de Colombia con la satisfacción de haber conocido algunos de los lugares más representativos de Antioquia.',
      en: 'After breakfast we transfer to the airport to board our return flight. We say goodbye to Colombia with the satisfaction of having experienced some of Antioquia\'s most representative places.',
    },
    sections: [],
    image: '/images/colombia/day-06-regreso.webp',
    transport: 'plane',
  },
]

function transportPill(type: DayPlan['transport'], locale: Locale) {
  if (type === 'plane') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[#005DAA]/10 px-3 py-1 text-xs font-semibold text-[#005DAA]">
        <Plane size={13} />
        {locale === 'es' ? 'Vuelo' : 'Flight'}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#005DAA]/10 px-3 py-1 text-xs font-semibold text-[#005DAA]">
      <Clock3 size={13} />
      {locale === 'es' ? 'Ciudad' : 'City'}
    </span>
  )
}

export default async function MedellinTourPage({ params }: MedellinPageProps) {
  const { locale: localeParam } = await params
  const locale: Locale = localeParam === 'en' ? 'en' : 'es'
  const isEs = locale === 'es'
  const tourName = isEs ? 'Medellín, Guatapé y Santa Fe de Antioquia' : 'Medellín, Guatapé and Santa Fe de Antioquia'

  const reserveNowWhatsApp = buildWhatsAppUrl(
    buildTourWhatsAppMessage({
      locale,
      tourName,
      intent: 'RESERVE_DEPOSIT',
      depositAmount: '250.00',
    }),
  )

  const introBullets = isEs
    ? [
        'Medellín, la ciudad de la eterna primavera',
        'Comuna 13 y transformación social',
        'Piedra del Peñol',
        'Guatapé y sus zócalos',
        'Santa Fe de Antioquia colonial',
        'Gastronomía paisa',
        'Cultura antioqueña',
        'Tiempo libre para disfrutar a nuestro ritmo',
      ]
    : [
        'Medellín, the city of eternal spring',
        'Comuna 13 and social transformation',
        'Piedra del Peñol',
        'Guatapé and its zócalos',
        'Colonial Santa Fe de Antioquia',
        'Paisa gastronomy',
        'Antioquia culture',
        'Free time to enjoy at your own pace',
      ]

  const includes = isEs
    ? [
        'Boletos aéreos (según el plan contratado)',
        '5 noches de hospedaje en Medellín',
        'Transporte privado durante todos los tours',
        'City Tour Medellín + Comuna 13',
        'Tour Guatapé y Piedra del Peñol',
        'Tour Santa Fe de Antioquia',
        'Acompañamiento Vora Travel',
      ]
    : [
        'Air tickets (according to contracted plan)',
        '5 nights accommodation in Medellín',
        'Private transport during all tours',
        'Medellín City Tour + Comuna 13',
        'Guatapé and Piedra del Peñol Tour',
        'Santa Fe de Antioquia Tour',
        'Vora Travel assistance',
      ]

  const optionalByDate: Record<string, string[]> = {
    '3 ENE': ['Paseo en barco por el embalse (~USD 6)'],
    '4 ENE': ['Hacienda Nápoles', 'Parque Arví', 'Tour del Café', 'Tour Gastronómico Paisa', 'Tour Histórico Pablo Escobar'],
  }

  return (
    <>
      <style>{`
        html,
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        @keyframes shimmer {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
        }

        .reserve-btn {
          animation: shimmer 2s infinite;
          transition: all 0.3s ease;
        }

        .reserve-btn:hover {
          animation: none;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
        }
      `}</style>

      <section className="relative min-h-[82vh] overflow-hidden bg-[#003B73]">
        <Image src={heroImage} alt={tourName} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B73]/45 via-[#003B73]/30 to-[#003B73]/65" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col justify-between px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="flex items-start justify-end">
            <Link href="/tours" className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/20">
              {isEs ? 'Volver a tours' : 'Back to tours'}
            </Link>
          </div>

          <div className="max-w-4xl pb-3 text-white">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {isEs ? 'MEDELLÍN, GUATAPÉ Y SANTA FE DE ANTIOQUIA' : 'MEDELLÍN, GUATAPÉ AND SANTA FE DE ANTIOQUIA'}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              {isEs
                ? 'CULTURA PAISA • ARTE URBANO • PUEBLOS COLORIDOS • TRANSFORMACIÓN SOCIAL'
                : 'PAISA CULTURE • URBAN ART • COLORFUL TOWNS • SOCIAL TRANSFORMATION'}
            </p>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/80">{isEs ? 'Desde' : 'From'}</span>
              <span className="text-3xl font-bold text-[#D6AE5C]">$699.95</span>
              <span className="text-sm text-white/70">USD / {isEs ? 'persona' : 'person'}</span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeroCtaModal
                tourSlug="medellin-guatape-santafe-2027"
                tourName={{
                  es: 'Medellín, Guatapé y Santa Fe de Antioquia',
                  en: 'Medellín, Guatapé and Santa Fe de Antioquia',
                }}
                availableDates={[
                  {
                    value: 'Medellín 2027 - Del 1 al 6 de Enero 2027',
                    label: {
                      es: 'Medellín 2027 - Del 1 al 6 de Enero 2027',
                      en: 'Medellín 2027 - January 1-6, 2027',
                    },
                  },
                ]}
                triggerLabel={{
                  es: 'Ver Fechas y Continuar',
                  en: 'View Dates and Continue',
                }}
                triggerClassName="inline-flex items-center justify-center rounded-xl bg-[#005DAA] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#004f90]"
              />
              <a
                href={reserveNowWhatsApp}
                className="reserve-btn inline-flex items-center justify-center rounded-xl bg-[#10B981] px-7 py-4 text-base font-semibold text-white"
              >
                {isEs ? 'Reserva $250.00' : 'Reserve $250.00'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-[#E5E7EB] bg-[#F5F7FA] p-8">
            <h2 className="font-display text-3xl font-bold text-[#003B73]">
              {isEs ? '¿QUÉ VAMOS A VIVIR EN ESTE VIAJE?' : 'WHAT WILL WE EXPERIENCE ON THIS TRIP?'}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              {isEs
                ? 'En esta experiencia descubriremos la esencia de Antioquia recorriendo tres de sus destinos más representativos:'
                : 'On this experience, we will discover the essence of Antioquia exploring three of its most representative destinations:'}
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-[#334155] sm:grid-cols-2">
              {introBullets.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#005DAA]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl border-l-4 border-[#D6AE5C] bg-white px-5 py-4 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              {isEs
                ? 'Nos hospedaremos durante todo el recorrido en Medellín, lo que nos permitirá disfrutar el viaje con mayor comodidad, evitando cambios de hotel y aprovechando mejor cada día.'
                : 'We\'ll stay in Medellín throughout the journey, allowing us to enjoy the trip with greater comfort, avoiding hotel changes and making the most of each day.'}
            </p>
          </article>

          <article className="rounded-3xl border border-[#D6AE5C]/35 bg-[#003B73] p-8 text-white">
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">{isEs ? 'INCLUYE' : 'INCLUDED'}</h2>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#D6AE5C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.1em] text-white/80">
              {isEs ? 'ITINERARIO SUJETO A CAMBIOS' : 'ITINERARY SUBJECT TO CHANGES'}
            </p>
            <p className="mt-4 text-sm text-white/80">Costa Rica: +506 7048-4949</p>
          </article>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
            {isEs ? 'ITINERARIO' : 'ITINERARY'}
          </h2>

          <div className="mt-8 space-y-8">
            {days.map((day) => (
              <article key={day.date} className="overflow-hidden rounded-3xl border border-[#D9DEE8] bg-white shadow-[0_10px_30px_rgba(0,59,115,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[320px,1fr]">
                  <div className="relative min-h-[240px]">
                    <Image src={day.image} alt={day.title[locale]} fill sizes="(max-width: 1024px) 100vw, 320px" className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 text-white">
                      <p className="text-xs font-semibold tracking-[0.1em]">{day.date}</p>
                      <p className="font-display text-lg font-bold">{day.title[locale]}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#003B73] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-white">{day.date}</span>
                      {transportPill(day.transport, locale)}
                      {day.duration && (
                        <span className="rounded-full border border-[#D6AE5C]/40 bg-[#FFF9ED] px-3 py-1 text-xs font-medium text-[#8A662A]">
                          {day.duration[locale]}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-[#003B73]">{day.title[locale]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">{day.narrative[locale]}</p>

                    {day.sections.map((section) => (
                      <div key={section.label.es} className="mt-5">
                        <p className="text-sm font-semibold text-[#003B73]">{section.label[locale]}</p>
                        <ul className="mt-2 grid gap-2 text-sm text-[#4B5563] sm:grid-cols-2">
                          {section.items[locale].map((item) => (
                            <li key={item} className="rounded-xl bg-[#F8FAFC] px-3 py-2">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {day.optional && optionalByDate[day.date] && (
                      <div className="mt-5 rounded-xl border border-[#D6AE5C]/35 bg-[#FFF9ED] px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8A662A]">{isEs ? day.optional.es : day.optional.en[0]}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {optionalByDate[day.date].map((tour) => (
                            <span key={tour} className="rounded-full border border-[#D6AE5C]/45 bg-white px-3 py-1 text-xs font-medium text-[#8A662A]">
                              {tour}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {tourData.experiences && <ExperiencesSection experiences={tourData.experiences} locale={locale} />}

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
            {isEs ? 'IMÁGENES REALES DEL VIAJE' : 'REAL TRAVEL IMAGES'}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <article key={item.image} className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white">
                <div className="relative h-56">
                  <Image src={item.image} alt={item.city[locale]} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover" />
                </div>
                <p className="px-4 py-3 text-center text-sm font-semibold text-[#003B73]">{item.city[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003B73] py-14 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-white/20 bg-white/5 p-7">
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">{isEs ? 'HOSPEDAJE' : 'ACCOMMODATION'}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {isEs
                ? 'Nos hospedaremos durante las cinco noches en Medellín, tipo de hospedaje puede ser hoteles categoría 3 o 4 estrellas o Airbnb debido a la disponibilidad en las fechas de su viaje.'
                : 'We will stay for five nights in Medellín, accommodation may be in 3 or 4-star hotels or Airbnb depending on availability on your travel dates.'}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              {(isEs ? ['céntricos', 'seguros', 'cómodos', 'bien ubicados', 'cercanos a restaurantes y comercios'] : ['central', 'safe', 'comfortable', 'well located', 'close to restaurants and shops']).map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-3 py-2">{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/75">
              {isEs
                ? 'En cuanto a la acomodación, es importante señalar que puede ser en habitaciones dobles o triples, según la disponibilidad dentro de las fechas de su viaje.'
                : 'Regarding accommodation, it is important to note that it may be in double or triple rooms, depending on availability within your travel dates.'}
            </p>
          </article>

          <article className="rounded-3xl border border-[#D6AE5C]/40 bg-[#002E5A] p-7">
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">
              {isEs ? 'INFORMACIÓN IMPORTANTE' : 'IMPORTANT INFORMATION'}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85 sm:text-base">
              {(isEs
                ? [
                    'Vacuna de Fiebre Amarilla obligatoria (al menos 22 días antes de la salida)',
                    'Todos los tours incluidos se realizan en transporte privado',
                    'El orden del itinerario puede variar por logística o condiciones climáticas',
                    'Algunos ingresos pueden depender del paquete contratado',
                    'Los tours opcionales tienen costo adicional',
                    'Ingreso a la Piedra del Peñol: ~25,000 COP (no incluido)',
                    'Horarios definitivos serán confirmados antes de la salida',
                    'La reserva NO es reembolsable',
                  ]
                : [
                    'Yellow Fever vaccine mandatory (at least 22 days before departure)',
                    'All included tours are conducted in private transport',
                    'Itinerary order may vary due to logistics or weather conditions',
                    'Some entries may depend on the contracted package',
                    'Optional tours have additional cost',
                    'Piedra del Peñol entrance: ~25,000 COP (not included)',
                    'Final schedules will be confirmed before departure',
                    'The reservation is NON-refundable',
                  ]).map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
            {isEs ? '¿LISTO PARA DESCUBRIR ANTIOQUIA?' : 'READY TO DISCOVER ANTIOQUIA?'}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#4B5563] sm:text-lg">
            {isEs
              ? 'Reserva tu lugar en esta aventura por Colombia. Cupos limitados. Contacta con nosotros para más información sobre fechas, precios y disponibilidad.'
              : 'Reserve your spot on this Colombian adventure. Limited spaces. Contact us for more information about dates, prices and availability.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HeroCtaModal
              tourSlug="medellin-guatape-santafe-2027"
              tourName={{
                es: 'Medellín, Guatapé y Santa Fe de Antioquia',
                en: 'Medellín, Guatapé and Santa Fe de Antioquia',
              }}
              availableDates={[
                {
                  value: 'Medellín 2027 - Del 1 al 6 de Enero 2027',
                  label: {
                    es: 'Medellín 2027 - Del 1 al 6 de Enero 2027',
                    en: 'Medellín 2027 - January 1-6, 2027',
                  },
                },
              ]}
              triggerLabel={{
                es: 'Reservar Ahora',
                en: 'Book Now',
              }}
              triggerClassName="btn-primary px-8 py-4 text-lg"
            />
            <Link
              href="/tours"
              className="rounded-full border border-[#003B73]/20 bg-white px-8 py-4 text-lg font-semibold text-[#003B73] transition hover:bg-[#F5F7FA]"
            >
              {isEs ? 'Ver Todos los Tours' : 'View All Tours'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
