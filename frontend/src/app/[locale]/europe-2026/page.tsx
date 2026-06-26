import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { CheckCircle2, Clock3, Plane, Train } from 'lucide-react'
import HeroCtaModal from '@/components/ui/HeroCtaModal'
import ExperiencesSection from '@/components/ExperiencesSection'
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

export const dynamic = 'force-dynamic'

type Locale = 'es' | 'en'

interface EuropePageProps {
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
  transport: 'plane' | 'train' | 'day'
}

// Replace these image URLs with your own photos when available.
const heroImage = '/images/europe-2026/hero-europa-vora-travel.webp'

// Gallery image URLs (easy to swap).
const gallery = [
  {
    image: '/images/europe-2026/day-17-madrid.webp',
    city: { es: 'Madrid', en: 'Madrid' },
  },
  {
    image: '/images/europe-2026/day-19-roma.webp',
    city: { es: 'Roma', en: 'Rome' },
  },
  {
    image: '/images/europe-2026/day-22-milan.webp',
    city: { es: 'Milán', en: 'Milan' },
  },
  {
    image: '/images/europe-2026/day-23-bernina-express.webp',
    city: { es: 'Alpes Suizos', en: 'Swiss Alps' },
  },
  {
    image: '/images/europe-2026/day-24-trieste.webp',
    city: { es: 'Trieste', en: 'Trieste' },
  },
  {
    image: '/images/europe-2026/day-25-ljubljana.webp',
    city: { es: 'Ljubljana', en: 'Ljubljana' },
  },
  {
    image: '/images/europe-2026/day-26-lago-bled.webp',
    city: { es: 'Lago Bled', en: 'Lake Bled' },
  },
  {
    image: '/images/europe-2026/day-21-tren-milan.webp',
    city: { es: 'Actividades', en: 'Activities' },
  },
]

// Daily image URLs are defined per day item below.
const days: DayPlan[] = [
  {
    date: '16 SEP',
    title: { es: 'VUELO COSTA RICA → MADRID', en: 'FLIGHT COSTA RICA → MADRID' },
    narrative: {
      es: 'Iniciaremos nuestra aventura rumbo a Europa. Noche a bordo.',
      en: 'We begin our European adventure. Overnight flight.',
    },
    sections: [],
    image: '/images/europe-2026/day-16-vuelo-madrid.webp',
    transport: 'plane',
  },
  {
    date: '17 SEP',
    title: { es: 'LLEGADA A MADRID', en: 'ARRIVAL IN MADRID' },
    narrative: {
      es: 'Llegaremos a Madrid y tendremos tiempo para descansar y comenzar a disfrutar la ciudad de forma tranquila mientras nos adaptamos al horario europeo.',
      en: 'We arrive in Madrid and have time to rest and start enjoying the city while adapting to European time.',
    },
    sections: [
      {
        label: { es: 'Ese día recorreremos:', en: 'That day we will visit:' },
        items: {
          es: ['Puerta del Sol', 'Plaza Mayor', 'Gran Vía', 'Mercado San Miguel'],
          en: ['Puerta del Sol', 'Plaza Mayor', 'Gran Vía', 'Mercado San Miguel'],
        },
      },
      {
        label: { es: 'También tendremos tiempo para:', en: 'We will also have time to:' },
        items: {
          es: ['Probar tapas españolas', 'Visitar cafeterías', 'Disfrutar el ambiente madrileño'],
          en: ['try Spanish tapas', 'visit cafés', 'enjoy Madrid atmosphere'],
        },
      },
    ],
    image: '/images/europe-2026/day-17-madrid.webp',
    transport: 'day',
  },
  {
    date: '18 SEP',
    title: { es: 'MADRID IMPERIAL', en: 'IMPERIAL MADRID' },
    narrative: {
      es: 'Este día vamos a descubrir algunos de los lugares más emblemáticos de Madrid.',
      en: 'This day we discover some of Madrid\'s most iconic places.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: ['Palacio Real', 'Plaza España', 'Parque El Retiro', 'Gran Vía', 'Barrio Salamanca', 'Museo del Prado', 'Templo de Debod'],
          en: ['Royal Palace', 'Plaza de España', 'El Retiro', 'Gran Vía', 'Salamanca District', 'Prado Museum', 'Temple of Debod'],
        },
      },
      {
        label: { es: 'Por la noche podremos disfrutar:', en: 'At night we may enjoy:' },
        items: {
          es: ['Rooftops', 'Flamenco', 'Restaurantes españoles', 'Vida nocturna madrileña'],
          en: ['rooftops', 'flamenco', 'Spanish restaurants', 'Madrid nightlife'],
        },
      },
    ],
    optional: {
      es: 'TOUR OPCIONAL',
      en: ['OPTIONAL TOUR'],
    },
    image: '/images/europe-2026/day-18-madrid-imperial.webp',
    transport: 'day',
  },
  {
    date: '19 SEP',
    title: { es: 'VUELO MADRID → ROMA', en: 'FLIGHT MADRID → ROME' },
    duration: { es: 'Duración aproximada de vuelo: 2 h 30 min', en: 'Estimated flight time: 2 h 30 min' },
    narrative: {
      es: 'Viajaremos hacia Roma, una de las ciudades más impresionantes e históricas de Europa.',
      en: 'We travel to Rome, one of the most impressive and historic cities in Europe.',
    },
    sections: [
      {
        label: { es: 'Al llegar recorreremos:', en: 'Upon arrival we will visit:' },
        items: {
          es: ['Fontana di Trevi', 'Plaza España', 'Panteón Romano', 'Piazza Navona'],
          en: ['Trevi Fountain', 'Spanish Steps', 'Pantheon', 'Piazza Navona'],
        },
      },
      {
        label: { es: 'Por la noche podremos disfrutar:', en: 'At night we may enjoy:' },
        items: {
          es: ['Pasta italiana tradicional', 'Helados italianos', 'Caminatas nocturnas', 'Terrazas romanas'],
          en: ['traditional pasta', 'Italian gelato', 'night walks', 'Roman terraces'],
        },
      },
    ],
    image: '/images/europe-2026/day-19-roma.webp',
    transport: 'plane',
  },
  {
    date: '20 SEP',
    title: { es: 'ROMA IMPERIAL', en: 'IMPERIAL ROME' },
    narrative: {
      es: 'Este día tendremos incluida la entrada al Coliseo Romano y Foro Romano.',
      en: 'This day includes entry to the Colosseum and Roman Forum.',
    },
    sections: [
      {
        label: { es: 'También recorreremos:', en: 'We will also visit:' },
        items: {
          es: ['Vaticano', 'Basílica de San Pedro', 'Trastevere', 'Monumento Vittorio Emanuele', 'Río Tíber'],
          en: ['Vatican', 'St. Peters Basilica', 'Trastevere', 'Vittorio Emanuele Monument', 'Tiber River'],
        },
      },
      {
        label: { es: 'Por la noche podremos disfrutar:', en: 'At night we may enjoy:' },
        items: {
          es: ['Wine bars', 'Restaurantes italianos', 'Ambiente romano nocturno'],
          en: ['wine bars', 'Italian restaurants', 'Roman evening vibe'],
        },
      },
    ],
    optional: {
      es: 'TOUR OPCIONAL',
      en: ['OPTIONAL TOUR'],
    },
    image: '/images/europe-2026/day-20-roma-imperial.webp',
    transport: 'day',
  },
  {
    date: '21 SEP',
    title: { es: 'TREN ROMA → MILÁN', en: 'TRAIN ROME → MILAN' },
    duration: { es: 'Duración aproximada: 3 h 10 min', en: 'Estimated duration: 3 h 10 min' },
    narrative: {
      es: 'Viajaremos en tren de alta velocidad atravesando los paisajes italianos rumbo a Milán.',
      en: 'We travel by high-speed train through Italian landscapes to Milan.',
    },
    sections: [
      {
        label: { es: 'Al llegar recorreremos:', en: 'Upon arrival we will visit:' },
        items: {
          es: ['Duomo de Milán', 'Galería Vittorio Emanuele', 'Piazza del Duomo', 'Castillo Sforzesco'],
          en: ['Milan Duomo', 'Galleria Vittorio Emanuele', 'Piazza del Duomo', 'Sforza Castle'],
        },
      },
      {
        label: { es: 'Por la noche podremos disfrutar:', en: 'At night we may enjoy:' },
        items: {
          es: ['Navigli', 'Aperitivos italianos', 'Restaurantes tradicionales'],
          en: ['Navigli', 'Italian aperitivo', 'traditional restaurants'],
        },
      },
    ],
    image: '/images/europe-2026/day-21-tren-milan.webp',
    transport: 'train',
  },
  {
    date: '22 SEP',
    title: { es: 'MILÁN', en: 'MILAN' },
    narrative: {
      es: 'Día libre para disfrutar la ciudad con tranquilidad.',
      en: 'Free day to enjoy the city at your own pace.',
    },
    sections: [
      {
        label: { es: 'Podremos:', en: 'We can:' },
        items: {
          es: ['Realizar compras', 'Recorrer cafeterías italianas', 'Visitar boutiques', 'Caminar por Navigli', 'Disfrutar la gastronomía local'],
          en: ['go shopping', 'visit Italian cafés', 'visit boutiques', 'walk around Navigli', 'enjoy local cuisine'],
        },
      },
    ],
    optional: {
      es: 'TOURS OPCIONALES',
      en: ['OPTIONAL TOURS'],
    },
    image: '/images/europe-2026/day-22-milan.webp',
    transport: 'day',
  },
  {
    date: '23 SEP',
    title: { es: 'BERNINA EXPRESS - ALPES SUIZOS', en: 'BERNINA EXPRESS - SWISS ALPS' },
    narrative: {
      es: 'Este día viviremos una de las experiencias ferroviarias más espectaculares de Europa. Saldremos temprano desde Milán rumbo a Tirano, Italia, donde abordaremos el famoso Bernina Express para atravesar los Alpes Suizos.',
      en: 'This day we experience one of Europe\'s most spectacular railway journeys. We leave Milan early for Tirano to board the Bernina Express through the Swiss Alps.',
    },
    sections: [
      {
        label: { es: 'Durante aproximadamente 4 horas veremos:', en: 'During about 4 hours we will see:' },
        items: {
          es: ['Glaciares', 'Lagos alpinos', 'Montañas', 'Túneles', 'Viaductos históricos', 'Pueblos suizos'],
          en: ['glaciers', 'alpine lakes', 'mountains', 'tunnels', 'historic viaducts', 'Swiss villages'],
        },
      },
      {
        label: { es: 'Al llegar a St. Moritz tendremos tiempo para:', en: 'In St. Moritz we will have time to:' },
        items: {
          es: ['Caminar por el centro', 'Tomar fotografías', 'Disfrutar un almuerzo suizo', 'Visitar cafeterías', 'Recorrer el lago'],
          en: ['walk downtown', 'take photos', 'enjoy a Swiss lunch', 'visit cafés', 'walk by the lake'],
        },
      },
    ],
    image: '/images/europe-2026/day-23-bernina-express.webp',
    transport: 'train',
  },
  {
    date: '24 SEP',
    title: { es: 'MILÁN → TRIESTE', en: 'MILAN → TRIESTE' },
    duration: { es: 'Duración aproximada: 5 h', en: 'Estimated duration: 5 h' },
    narrative: {
      es: 'Nos trasladaremos hacia Trieste, una ciudad italiana con influencia austrohúngara y muchísimo encanto.',
      en: 'We travel to Trieste, an Italian city with Austro-Hungarian influence and unique charm.',
    },
    sections: [
      {
        label: { es: 'Al llegar recorreremos:', en: 'Upon arrival we will visit:' },
        items: {
          es: ['Piazza Unità d’Italia', 'Canal Grande', 'Puerto marítimo', 'Cafés históricos', 'Centro histórico'],
          en: ['Piazza Unità d’Italia', 'Canal Grande', 'seaport', 'historic cafés', 'historic center'],
        },
      },
    ],
    image: '/images/europe-2026/day-24-trieste.webp',
    transport: 'train',
  },
  {
    date: '25 SEP',
    title: { es: 'TRIESTE → LJUBLJANA', en: 'TRIESTE → LJUBLJANA' },
    duration: { es: 'Duración aproximada: 2 h', en: 'Estimated duration: 2 h' },
    narrative: {
      es: 'Nos trasladaremos hacia Ljubljana, capital de Eslovenia.',
      en: 'We travel to Ljubljana, capital of Slovenia.',
    },
    sections: [
      {
        label: { es: 'Al llegar recorreremos:', en: 'Upon arrival we will visit:' },
        items: {
          es: ['Puente Triple', 'Castillo de Ljubljana', 'Casco histórico', 'Mercados locales', 'Río Ljubljanica'],
          en: ['Triple Bridge', 'Ljubljana Castle', 'old town', 'local markets', 'Ljubljanica river'],
        },
      },
      {
        label: { es: 'Por la noche podremos disfrutar:', en: 'At night we may enjoy:' },
        items: {
          es: ['Restaurantes junto al río', 'Cafés europeos', 'Ambiente relajado'],
          en: ['riverside restaurants', 'European cafés', 'relaxed atmosphere'],
        },
      },
    ],
    image: '/images/europe-2026/day-25-ljubljana.webp',
    transport: 'train',
  },
  {
    date: '26 SEP',
    title: { es: 'TOUR LAGO BLED', en: 'LAKE BLED TOUR' },
    narrative: {
      es: 'Visitaremos uno de los lugares más hermosos de Europa. Será un día ideal para disfrutar naturaleza y tranquilidad.',
      en: 'We will visit one of the most beautiful places in Europe. A perfect day for nature and calm.',
    },
    sections: [
      {
        label: { es: 'En Lago Bled podremos:', en: 'At Lake Bled we can:' },
        items: {
          es: ['Recorrer el lago', 'Visitar el castillo', 'Tomar fotografías panorámicas', 'Probar el famoso pastel kremna rezina', 'Caminar junto al lago', 'Disfrutar los paisajes alpinos'],
          en: ['walk around the lake', 'visit the castle', 'take panoramic photos', 'try kremna rezina cake', 'lake-side walk', 'enjoy alpine landscapes'],
        },
      },
    ],
    image: '/images/europe-2026/day-26-lago-bled.webp',
    transport: 'day',
  },
  {
    date: '27 SEP',
    title: { es: 'DÍA LIBRE EN LJUBLJANA', en: 'FREE DAY IN LJUBLJANA' },
    narrative: {
      es: 'Tendremos un día libre para disfrutar la ciudad a nuestro ritmo.',
      en: 'We will have a free day to enjoy the city at our own pace.',
    },
    sections: [
      {
        label: { es: 'Podremos:', en: 'We can:' },
        items: {
          es: ['Recorrer cafeterías', 'Hacer compras', 'Caminar junto al río', 'Disfrutar el centro histórico', 'Probar gastronomía eslovena', 'Visitar mercados locales'],
          en: ['visit cafés', 'go shopping', 'walk by the river', 'enjoy old town', 'try Slovenian cuisine', 'visit local markets'],
        },
      },
    ],
    optional: {
      es: 'TOURS OPCIONALES',
      en: ['OPTIONAL TOURS'],
    },
    image: '/images/europe-2026/day-27-ljubljana-libre.webp',
    transport: 'day',
  },
  {
    date: '28 SEP',
    title: { es: 'VUELO LJUBLJANA → MADRID', en: 'FLIGHT LJUBLJANA → MADRID' },
    narrative: {
      es: 'Regresaremos a Madrid para disfrutar nuestra última etapa del viaje.',
      en: 'We return to Madrid to enjoy the final stage of the trip.',
    },
    sections: [
      {
        label: { es: 'Tendremos tiempo para:', en: 'We will have time for:' },
        items: {
          es: ['Compras', 'Tapas', 'Paseo nocturno', 'Despedida grupal', 'Disfrutar la vida madrileña'],
          en: ['shopping', 'tapas', 'night walk', 'group farewell', 'enjoy Madrid life'],
        },
      },
    ],
    image: '/images/europe-2026/day-28-madrid-regreso.webp',
    transport: 'plane',
  },
  {
    date: '29 SEP',
    title: { es: 'MADRID LIBRE', en: 'FREE DAY IN MADRID' },
    narrative: {
      es: 'Último día completo en Europa.',
      en: 'Last full day in Europe.',
    },
    sections: [
      {
        label: { es: 'Podremos aprovechar para:', en: 'We can take advantage to:' },
        items: {
          es: ['Compras finales', 'Visitar museos', 'Recorrer Gran Vía', 'Disfrutar cafeterías', 'Visitar el estadio Santiago Bernabéu', 'Pasear por El Retiro'],
          en: ['final shopping', 'visit museums', 'walk Gran Vía', 'enjoy cafés', 'visit Santiago Bernabéu stadium', 'walk through El Retiro'],
        },
      },
    ],
    optional: {
      es: 'TOURS OPCIONALES',
      en: ['OPTIONAL TOURS'],
    },
    image: '/images/europe-2026/day-29-madrid-libre.webp',
    transport: 'day',
  },
  {
    date: '30 SEP',
    title: { es: 'RETORNO A COSTA RICA', en: 'RETURN TO COSTA RICA' },
    narrative: {
      es: 'Tomaremos nuestro vuelo de regreso hacia Costa Rica finalizando esta experiencia europea.',
      en: 'We take our return flight to Costa Rica, ending this European experience.',
    },
    sections: [],
    image: '/images/europe-2026/day-30-retorno.webp',
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

  if (type === 'train') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[#005DAA]/10 px-3 py-1 text-xs font-semibold text-[#005DAA]">
        <Train size={13} />
        {locale === 'es' ? 'Tren' : 'Train'}
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

export default async function Europe2026Page({ params }: EuropePageProps) {
  const { locale: localeParam } = await params
  const locale: Locale = localeParam === 'en' ? 'en' : 'es'
  const isEs = locale === 'es'
  const tourName = isEs ? 'Europa Imperial' : 'Imperial Europe'
  const reserveNowWhatsApp = buildWhatsAppUrl(
    buildTourWhatsAppMessage({
      locale,
      tourName,
      intent: 'RESERVE_DEPOSIT',
      depositAmount: '500.00',
    }),
  )
  const bookItineraryWhatsApp = buildWhatsAppUrl(
    buildTourWhatsAppMessage({
      locale,
      tourName,
      intent: 'BOOK_ITINERARY',
    }),
  )

  const introBullets = isEs
    ? ['Ciudades imperiales', 'Trenes panorámicos', 'Alpes suizos', 'Gastronomía italiana y española', 'Castillos', 'Pueblos europeos', 'Lagos alpinos', 'Historia y cultura']
    : ['imperial cities', 'panoramic trains', 'Swiss Alps', 'Italian and Spanish gastronomy', 'castles', 'European villages', 'alpine lakes', 'history and culture']

  const includes = isEs
    ? [
        'Tiquetes aéreos internacionales e internos',
        'Tren de alta velocidad Roma → Milán',
        'Experiencia Bernina Express',
        'Hospedaje en hoteles o Airbnb con acomodaciones dobles o triples',
        'Entrada al Coliseo Romano y Foro Romano sujeto a disponibilidad',
        'Tour al Lago Blede Iglesia de la Asunción y Castillo de Bled',
        'Artículo personal incluido',
        'Seguro de asistencia medica y viaje obligatorio incluido',
        'Acompañamiento en español e inglés durante todo el recorrido',
      ]
    : [
        'International and internal flights',
        'High-speed train Rome → Milan',
        'Bernina Express experience',
        'Accommodation in hotels or Airbnb with double or triple rooms',
        'Colosseum and Roman Forum entry subject to availability',
        'Lake Bled Assumption Church and Bled Castle tour',
        'Personal item included',
        'Mandatory medical and travel assistance insurance included',
        'Assistance in Spanish and English throughout the route',
      ]

  const optionalByDate: Record<string, string[]> = {
    '18 SEP': ['Excursión a Toledo'],
    '20 SEP': ['Museos Vaticanos'],
    '22 SEP': ['Lago Como', 'Outlet Serravalle', 'Tour gastronómico italiano'],
    '27 SEP': ['Cuevas de Postojna', 'Castillo Predjama', 'Tour gastronómico', 'Excursión a la costa eslovena'],
    '29 SEP': ['Segovia', 'Ávila', 'Show de flamenco'],
  }

  const featuredExperiences = isEs
    ? ['Coliseo Romano', 'Bernina Express', 'Alpes Suizos', 'Lago Bled', 'Madrid Imperial', 'Trenes panorámicos europeos', 'Gastronomía italiana y española']
    : ['Colosseum', 'Bernina Express', 'Swiss Alps', 'Lake Bled', 'Imperial Madrid', 'European panoramic trains', 'Italian and Spanish gastronomy']

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
        <Image src={heroImage} alt={isEs ? 'Europa Imperial' : 'Imperial Europe'} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B73]/45 via-[#003B73]/30 to-[#003B73]/65" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col justify-between px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="flex items-start justify-end">
            <Link href="/tours" className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/20">
              {isEs ? 'Volver a tours' : 'Back to tours'}
            </Link>
          </div>

          <div className="max-w-4xl pb-3 text-white">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {isEs ? 'EUROPA IMPERIAL' : 'IMPERIAL EUROPE'}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              {isEs
                ? 'RUTA IMPERIAL Y ALPES EUROPEOS: MADRID - ROMA - MILÁN - SUIZA - TRIESTE - ESLOVENIA'
                : 'IMPERIAL ROUTE AND EUROPEAN ALPS: MADRID - ROME - MILAN - SWITZERLAND - TRIESTE - SLOVENIA'}
            </p>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/80">{isEs ? 'Desde' : 'From'}</span>
              <span className="text-3xl font-bold text-[#FCD34D]">$2,950</span>
              <span className="text-sm text-white/70">USD / {isEs ? 'persona' : 'person'}</span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeroCtaModal
                tourSlug="ruta-imperial-europa"
                tourName={{
                  es: 'Ruta Imperial y Alpes Europeos',
                  en: 'Imperial Route and European Alps',
                }}
                availableDates={[
                  {
                    value: 'Europa Imperial - Del 15 de Sept al 30 de Sept 2026',
                    label: {
                      es: 'Europa Imperial - Del 15 de Sept al 30 de Sept 2026',
                      en: 'Imperial Europe - Sep 15 to Sep 30, 2026',
                    },
                  },
                  {
                    value: 'Europa Imperial Navidena - Del 5 de Dic al 20 de Dic 2026',
                    label: {
                      es: 'Europa Imperial Navidena - Del 5 de Dic al 20 de Dic 2026',
                      en: 'Imperial Christmas Europe - Dec 5 to Dec 20, 2026',
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
                {isEs ? 'Reserva $500.00' : 'Reserve $500.00'}
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
                ? 'En esta experiencia vamos a recorrer algunas de las ciudades y paisajes más impresionantes de Europa combinando:'
                : 'On this experience, we will travel through some of Europe\'s most impressive cities and landscapes, combining:'}
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
                ? 'He diseñado esta ruta para disfrutar Europa de una forma cómoda y equilibrada, evitando cambios excesivos de hotel y combinando vuelos cortos con recorridos en tren para aprovechar mejor los paisajes y la experiencia del viaje.'
                : 'I designed this route to enjoy Europe in a comfortable and balanced way, avoiding excessive hotel changes and combining short flights with train rides to make the most of scenery and experience.'}
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
            <p className="text-sm text-white/80">Europa: +44 7735 701311</p>
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

      <ExperiencesSection
        experiences={[
          {
            id: 'exp-001',
            image: '/images/europe-2026/Andrea M.webp',
            quote: {
              es: '"El Lago Bled fue uno de los lugares más impresionantes de todo el recorrido. La iglesia reflejada en el agua, simplemente mágico."',
              en: '"Lake Bled was one of the most impressive places of the entire trip. The church reflected in the water, simply magical."',
            },
            name: 'Andrea M.',
            city: 'Costa Rica',
          },
          {
            id: 'exp-002',
            image: '/images/europe-2026/Carlos & María.webp',
            quote: {
              es: '"La organización del viaje fue impecable. Pudimos disfrutar cada ciudad sin estrés, todo estaba perfectamente planeado."',
              en: '"The organization of the trip was impeccable. We could enjoy each city without stress, everything was perfectly planned."',
            },
            name: 'Carlos & María',
            city: 'Colombia',
          },
          {
            id: 'exp-003',
            image: '/images/europe-2026/Sofia R.webp',
            quote: {
              es: '"El equilibrio entre actividades y tiempo libre fue perfecto. Tuvimos momentos para explorar solos y momentos compartidos del grupo."',
              en: '"The balance between activities and free time was perfect. We had moments to explore on our own and moments together as a group."',
            },
            name: 'Sofía R.',
            city: 'Costa Rica',
          },
        ]}
        locale={locale}
      />

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
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">{isEs ? 'HOSPEDAJE Y EQUIPAJE' : 'HOTELS AND LUGGAGE'}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {isEs
                ? 'Durante el recorrido nos hospedaremos en hoteles o Airbnb cuidadosamente seleccionados por ubicación, comodidad y conexión con estaciones de tren y principales atractivos turísticos.'
                : 'During the route, we stay in carefully selected hotels or Airbnb for location, comfort and connectivity with train stations and main attractions.'}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              {(isEs ? ['céntricos', 'seguros', 'cómodos para grupos', 'cercanos al transporte público', 'bien conectados'] : ['central', 'safe', 'group-friendly', 'close to public transport', 'well connected']).map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-3 py-2">{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/75">
              {isEs
                ? 'Artículo personal incluido: 40 x 30 x 20 cm. Equipaje de mano y equipaje documentado sujetos a disponibilidad y costo adicional.'
                : 'Personal item included: 40 x 30 x 20 cm. Carry-on and checked baggage subject to availability and additional cost.'}
            </p>
          </article>

          <article className="rounded-3xl border border-[#D6AE5C]/40 bg-[#002E5A] p-7">
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">
              {isEs ? 'INFORMACIÓN IMPORTANTE' : 'IMPORTANT INFORMATION'}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85 sm:text-base">
              {(isEs
                ? [
                    'Septiembre es una excelente época para recorrer Europa.',
                    'Recomendamos llevar zapato cómodo.',
                    'Adaptador europeo recomendado, sino tienes, te lo proporcionamos por un costo minimo adicional.',
                    'Seguro de asistencia medica y viaje obligatorio incluido.',
                    'El orden del itinerario puede variar por logística operativa.',
                    'Horarios finales serán confirmados previo a la salida.',
                    'El paquete debe estar cancelado en su totalidad 22 días antes de la salida.',
                    'Algunas actividades pueden variar según clima o disponibilidad.',
                    'La reserva NO es reembolsable.',
                  ]
                : [
                    'September is an excellent time to travel Europe.',
                    'Comfortable shoes are recommended.',
                    'European adapter recommended, if you don\'t have one, we provide it for a minimal additional cost.',
                    'Medical and travel insurance mandatory included.',
                    'The itinerary order can vary due to operational logistics.',
                    'Final schedules are confirmed before departure.',
                    'Some activities may vary due to weather or availability.',
                    'The reservation is NON-refundable.',
                  ]).map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>

            <h3 className="mt-6 font-display text-2xl font-bold text-[#F4D89F]">
              {isEs ? 'EXPERIENCIAS DESTACADAS' : 'HIGHLIGHT EXPERIENCES'}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredExperiences.map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.05em]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a href={bookItineraryWhatsApp} className="inline-flex w-full justify-center rounded-xl bg-[#005DAA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004f90]">
                {isEs ? 'Reservar este itinerario' : 'Book this itinerary'}
              </a>
              <p className="text-center text-xs text-white/65">
                {isEs
                  ? 'Vora Travel Costa Rica: +506 7048-4949 | Europa: +44 7735 701311'
                  : 'Vora Travel Costa Rica: +506 7048-4949 | Europe: +44 7735 701311'}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
