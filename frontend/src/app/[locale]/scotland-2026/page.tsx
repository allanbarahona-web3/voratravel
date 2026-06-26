import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { CheckCircle2, Clock3, Plane, Train } from 'lucide-react'
import HeroCtaModal from '@/components/ui/HeroCtaModal'
import ExperiencesSection from '@/components/ExperiencesSection'
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

export const dynamic = 'force-dynamic'

type Locale = 'es' | 'en'

interface ScotlandPageProps {
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

const heroImage = '/images/scotland-2026/hero-tierras-celtas.webp'

const gallery = [
  {
    image: '/images/scotland-2026/gallery-londres.webp',
    city: { es: 'Londres', en: 'London' },
  },
  {
    image: '/images/scotland-2026/gallery-edimburgo.webp',
    city: { es: 'Edimburgo', en: 'Edinburgh' },
  },
  {
    image: '/images/scotland-2026/gallery-highlands.webp',
    city: { es: 'Highlands de Escocia', en: 'Scottish Highlands' },
  },
  {
    image: '/images/scotland-2026/gallery-lago-ness.webp',
    city: { es: 'Lago Ness', en: 'Loch Ness' },
  },
  {
    image: '/images/scotland-2026/gallery-dublin.webp',
    city: { es: 'Dublín', en: 'Dublin' },
  },
  {
    image: '/images/scotland-2026/gallery-cliffs-moher.webp',
    city: { es: 'Cliffs of Moher', en: 'Cliffs of Moher' },
  },
  {
    image: '/images/scotland-2026/gallery-madrid.webp',
    city: { es: 'Madrid', en: 'Madrid' },
  },
  {
    image: '/images/scotland-2026/gallery-toledo.webp',
    city: { es: 'Toledo', en: 'Toledo' },
  },
]

const days: DayPlan[] = [
  {
    date: '22 SEP',
    title: { es: 'VUELO COSTA RICA → MADRID', en: 'FLIGHT COSTA RICA → MADRID' },
    narrative: {
      es: 'Iniciaremos nuestra aventura rumbo a Europa. Nos reuniremos en el aeropuerto para realizar el proceso de documentación y abordar nuestro vuelo internacional con destino a Madrid. Noche a bordo.',
      en: 'We begin our European adventure. We gather at the airport to check in and board our international flight to Madrid. Overnight flight.',
    },
    sections: [],
    image: '/images/scotland-2026/day-22-vuelo-madrid.webp',
    transport: 'plane',
  },
  {
    date: '23 SEP',
    title: { es: 'MADRID → LONDRES', en: 'MADRID → LONDON' },
    narrative: {
      es: 'Llegaremos a Madrid y realizaremos nuestra conexión hacia Londres. Al llegar a la capital británica tendremos nuestro primer contacto con la ciudad, recorriendo algunas de sus zonas más animadas y famosas. Será un recorrido ideal para comenzar a adaptarnos al horario europeo y disfrutar el ambiente nocturno de Londres.',
      en: 'We arrive in Madrid and connect to London. Upon arrival in the British capital, we will have our first contact with the city, exploring some of its most lively and famous areas. It will be an ideal tour to start adapting to European time and enjoy London\'s nightlife.',
    },
    sections: [
      {
        label: { es: 'Ese día podremos recorrer:', en: 'That day we can explore:' },
        items: {
          es: ['Piccadilly Circus', 'Leicester Square', 'Chinatown', 'Covent Garden', 'Trafalgar Square'],
          en: ['Piccadilly Circus', 'Leicester Square', 'Chinatown', 'Covent Garden', 'Trafalgar Square'],
        },
      },
    ],
    image: '/images/scotland-2026/day-23-madrid-londres.webp',
    transport: 'plane',
  },
  {
    date: '24 SEP',
    title: { es: 'LONDRES IMPERIAL', en: 'IMPERIAL LONDON' },
    narrative: {
      es: 'Este día conoceremos algunos de los lugares más emblemáticos de Londres. Durante el recorrido disfrutaremos la arquitectura, historia y elegancia de una de las ciudades más importantes del mundo.',
      en: 'This day we will visit some of London\'s most iconic places. During the tour, we will enjoy the architecture, history and elegance of one of the world\'s most important cities.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Big Ben',
            'Palacio de Westminster',
            'Abadía de Westminster',
            'Buckingham Palace',
            'St. James\'s Park',
            'Trafalgar Square',
            'London Eye',
            'Tower Bridge',
            'Torre de Londres',
          ],
          en: [
            'Big Ben',
            'Westminster Palace',
            'Westminster Abbey',
            'Buckingham Palace',
            'St. James\'s Park',
            'Trafalgar Square',
            'London Eye',
            'Tower Bridge',
            'Tower of London',
          ],
        },
      },
    ],
    optional: {
      es: 'TOUR OPCIONAL',
      en: ['OPTIONAL TOUR'],
    },
    image: '/images/scotland-2026/day-24-londres-imperial.webp',
    transport: 'day',
  },
  {
    date: '25 SEP',
    title: { es: 'LONDRES → EDIMBURGO', en: 'LONDON → EDINBURGH' },
    narrative: {
      es: 'Viajaremos hacia Escocia para llegar a Edimburgo, una de las ciudades medievales más hermosas de Europa. Al llegar comenzaremos a recorrer su centro histórico. Este día tendremos nuestro primer encuentro con la arquitectura de piedra, calles antiguas y ambiente escocés que hacen de Edimburgo una ciudad inolvidable.',
      en: 'We travel to Scotland to reach Edinburgh, one of Europe\'s most beautiful medieval cities. Upon arrival, we begin exploring its historic center. This day we will have our first encounter with the stone architecture, ancient streets, and Scottish atmosphere that make Edinburgh an unforgettable city.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: ['Royal Mile', 'St Giles\' Cathedral', 'Victoria Street', 'Grassmarket', 'Princes Street'],
          en: ['Royal Mile', 'St Giles\' Cathedral', 'Victoria Street', 'Grassmarket', 'Princes Street'],
        },
      },
    ],
    image: '/images/scotland-2026/day-25-edimburgo.webp',
    transport: 'plane',
  },
  {
    date: '26 SEP',
    title: { es: 'EDIMBURGO MEDIEVAL', en: 'MEDIEVAL EDINBURGH' },
    narrative: {
      es: 'Este día descubriremos la historia y los principales atractivos de la capital escocesa. Tendremos tiempo para caminar, tomar fotografías y disfrutar las vistas panorámicas de la ciudad. Por la tarde podremos aprovechar tiempo libre para compras, cafeterías o recorrer con más calma el centro histórico.',
      en: 'This day we will discover the history and main attractions of the Scottish capital. We will have time to walk, take photos, and enjoy panoramic views of the city. In the afternoon, we can take advantage of free time for shopping, cafés, or leisurely exploring the historic center.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Castillo de Edimburgo',
            'Princes Street Gardens',
            'Calton Hill',
            'Dean Village',
            'Palacio de Holyrood',
            'Royal Mile',
          ],
          en: [
            'Edinburgh Castle',
            'Princes Street Gardens',
            'Calton Hill',
            'Dean Village',
            'Holyrood Palace',
            'Royal Mile',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-26-edimburgo-medieval.webp',
    transport: 'day',
  },
  {
    date: '27 SEP',
    title: { es: 'HIGHLANDS DE ESCOCIA Y LAGO NESS', en: 'SCOTTISH HIGHLANDS AND LOCH NESS' },
    narrative: {
      es: 'Este será uno de los días más esperados del viaje. Saldremos temprano desde Edimburgo para adentrarnos en las impresionantes Highlands de Escocia, una región famosa por sus montañas, lagos, valles y paisajes cinematográficos. En este recorrido podremos disfrutar paisajes de montaña, pueblos tradicionales, lagos escoceses y algunos de los escenarios naturales más impresionantes del Reino Unido. Al finalizar la tarde regresaremos a Edimburgo.',
      en: 'This will be one of the most anticipated days of the trip. We will leave early from Edinburgh to enter the stunning Scottish Highlands, a region famous for its mountains, lakes, valleys, and cinematic landscapes. During this tour, we can enjoy mountain scenery, traditional villages, Scottish lochs, and some of the most impressive natural settings in the UK. In the evening, we will return to Edinburgh.',
    },
    sections: [
      {
        label: { es: 'Durante la excursión conoceremos:', en: 'During the excursion we will visit:' },
        items: {
          es: [
            'Parque Nacional Loch Lomond & The Trossachs',
            'Rannoch Moor',
            'Glencoe',
            'Fort William',
            'Ben Nevis, vista panorámica',
            'Great Glen',
            'Fort Augustus',
            'Lago Ness',
          ],
          en: [
            'Loch Lomond & The Trossachs National Park',
            'Rannoch Moor',
            'Glencoe',
            'Fort William',
            'Ben Nevis, panoramic view',
            'Great Glen',
            'Fort Augustus',
            'Loch Ness',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-27-highlands-lago-ness.webp',
    transport: 'day',
  },
  {
    date: '28 SEP',
    title: { es: 'ESCOCIA → DUBLÍN', en: 'SCOTLAND → DUBLIN' },
    narrative: {
      es: 'Tomaremos nuestro vuelo hacia Irlanda. Al llegar a Dublín comenzaremos a descubrir la capital irlandesa con un recorrido panorámico por su centro histórico. Será una tarde perfecta para sentir el ambiente irlandés, sus calles, música, pubs tradicionales y vida urbana.',
      en: 'We take our flight to Ireland. Upon arrival in Dublin, we begin discovering the Irish capital with a panoramic tour of its historic center. It will be a perfect afternoon to feel the Irish atmosphere, its streets, music, traditional pubs, and urban life.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Temple Bar',
            'Ha\'penny Bridge',
            'Río Liffey',
            'O\'Connell Street',
            'Estatua de Molly Malone',
            'Grafton Street',
          ],
          en: [
            'Temple Bar',
            'Ha\'penny Bridge',
            'River Liffey',
            'O\'Connell Street',
            'Molly Malone Statue',
            'Grafton Street',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-28-dublin.webp',
    transport: 'plane',
  },
  {
    date: '29 SEP',
    title: { es: 'CLIFFS OF MOHER', en: 'CLIFFS OF MOHER' },
    narrative: {
      es: 'Este día realizaremos una de las excursiones más famosas de Irlanda. Frente al océano Atlántico disfrutaremos de uno de los paisajes naturales más impresionantes del viaje. Será un día dedicado a la naturaleza, los acantilados, fotografías panorámicas y la belleza salvaje de la costa oeste irlandesa. Al finalizar regresaremos a Dublín.',
      en: 'This day we will take one of Ireland\'s most famous excursions. Facing the Atlantic Ocean, we will enjoy one of the most impressive natural landscapes of the trip. It will be a day dedicated to nature, cliffs, panoramic photos, and the wild beauty of the Irish west coast. At the end, we return to Dublin.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Cliffs of Moher',
            'The Burren',
            'Wild Atlantic Way',
            'Centro de visitantes de los Cliffs of Moher',
          ],
          en: [
            'Cliffs of Moher',
            'The Burren',
            'Wild Atlantic Way',
            'Cliffs of Moher Visitor Centre',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-29-cliffs-moher.webp',
    transport: 'day',
  },
  {
    date: '30 SEP',
    title: { es: 'DÍA LIBRE EN DUBLÍN', en: 'FREE DAY IN DUBLIN' },
    narrative: {
      es: 'Tendremos un día libre para disfrutar Dublín a nuestro propio ritmo. Este día está pensado para descansar un poco, hacer compras o sumar una experiencia adicional según el interés de cada viajero.',
      en: 'We will have a free day to enjoy Dublin at our own pace. This day is designed to rest a bit, go shopping, or add an additional experience according to each traveler\'s interests.',
    },
    sections: [
      {
        label: { es: 'Podremos aprovechar para:', en: 'We can take advantage to:' },
        items: {
          es: [
            'Visitar Trinity College',
            'Conocer el Libro de Kells',
            'Recorrer el Castillo de Dublín',
            'Visitar la Catedral de San Patricio',
            'Caminar por St. Stephen\'s Green',
            'Realizar compras en Grafton Street',
            'Disfrutar cafeterías, restaurantes y pubs tradicionales',
          ],
          en: [
            'Visit Trinity College',
            'See the Book of Kells',
            'Tour Dublin Castle',
            'Visit St. Patrick\'s Cathedral',
            'Walk through St. Stephen\'s Green',
            'Shop on Grafton Street',
            'Enjoy cafés, restaurants and traditional pubs',
          ],
        },
      },
    ],
    optional: {
      es: 'TOURS OPCIONALES',
      en: ['OPTIONAL TOURS'],
    },
    image: '/images/scotland-2026/day-30-dublin-libre.webp',
    transport: 'day',
  },
  {
    date: '1 OCT',
    title: { es: 'DUBLÍN → MADRID', en: 'DUBLIN → MADRID' },
    narrative: {
      es: 'Tomaremos nuestro vuelo hacia Madrid para iniciar la última etapa del viaje. Al llegar tendremos un recorrido tranquilo por el centro histórico de la capital española. Será una excelente noche para disfrutar tapas, terrazas y el ambiente madrileño.',
      en: 'We take our flight to Madrid to begin the final stage of the trip. Upon arrival, we will have a relaxed tour of the Spanish capital\'s historic center. It will be an excellent evening to enjoy tapas, terraces, and the Madrid atmosphere.',
    },
    sections: [
      {
        label: { es: 'Recorreremos:', en: 'We will explore:' },
        items: {
          es: ['Puerta del Sol', 'Plaza Mayor', 'Mercado de San Miguel', 'Calle Mayor', 'Gran Vía'],
          en: ['Puerta del Sol', 'Plaza Mayor', 'San Miguel Market', 'Calle Mayor', 'Gran Vía'],
        },
      },
    ],
    image: '/images/scotland-2026/day-01-madrid.webp',
    transport: 'plane',
  },
  {
    date: '2 OCT',
    title: { es: 'MADRID IMPERIAL', en: 'IMPERIAL MADRID' },
    narrative: {
      es: 'Este día conoceremos algunos de los lugares más representativos de Madrid. Por la noche podremos disfrutar restaurantes españoles, rooftops, terrazas o un espectáculo de flamenco opcional.',
      en: 'This day we will visit some of Madrid\'s most representative places. At night, we can enjoy Spanish restaurants, rooftops, terraces, or an optional flamenco show.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Palacio Real',
            'Catedral de la Almudena',
            'Plaza de España',
            'Gran Vía',
            'Puerta de Alcalá',
            'Parque El Retiro',
            'Fuente de Cibeles',
            'Barrio de las Letras',
          ],
          en: [
            'Royal Palace',
            'Almudena Cathedral',
            'Plaza de España',
            'Gran Vía',
            'Puerta de Alcalá',
            'El Retiro Park',
            'Cibeles Fountain',
            'Literary Quarter',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-02-madrid-imperial.webp',
    transport: 'day',
  },
  {
    date: '3 OCT',
    title: { es: 'TOLEDO MEDIEVAL', en: 'MEDIEVAL TOLEDO' },
    narrative: {
      es: 'Este día realizaremos una excursión incluida a Toledo, una de las ciudades históricas más impresionantes de España. Toledo es conocida como la ciudad de las tres culturas por su herencia cristiana, judía y musulmana. Durante el recorrido caminaremos por calles medievales, disfrutaremos miradores panorámicos y tendremos tiempo para compras de artesanía, espadas y damasquinado. Por la tarde regresaremos a Madrid.',
      en: 'This day we will take an included excursion to Toledo, one of Spain\'s most impressive historic cities. Toledo is known as the city of three cultures for its Christian, Jewish, and Muslim heritage. During the tour, we will walk through medieval streets, enjoy panoramic viewpoints, and have time for shopping for crafts, swords, and damascene work. In the afternoon, we return to Madrid.',
    },
    sections: [
      {
        label: { es: 'Visitaremos:', en: 'We will visit:' },
        items: {
          es: [
            'Catedral de Toledo',
            'Alcázar de Toledo',
            'Plaza de Zocodover',
            'Barrio Judío',
            'Monasterio de San Juan de los Reyes',
            'Sinagoga Santa María la Blanca',
            'Puente de San Martín',
            'Mirador del Valle',
          ],
          en: [
            'Toledo Cathedral',
            'Toledo Alcázar',
            'Plaza de Zocodover',
            'Jewish Quarter',
            'San Juan de los Reyes Monastery',
            'Santa María la Blanca Synagogue',
            'San Martín Bridge',
            'Valle Viewpoint',
          ],
        },
      },
      {
        label: { es: 'Noche libre en Madrid, podremos aprovechar para:', en: 'Free evening in Madrid, we can:' },
        items: {
          es: [
            'Cena de despedida',
            'Compras finales',
            'Paseo por Gran Vía',
            'Tapas españolas',
            'Show de flamenco opcional',
          ],
          en: [
            'Farewell dinner',
            'Final shopping',
            'Walk through Gran Vía',
            'Spanish tapas',
            'Optional flamenco show',
          ],
        },
      },
    ],
    image: '/images/scotland-2026/day-03-toledo.webp',
    transport: 'day',
  },
  {
    date: '4 OCT',
    title: { es: 'MADRID → COSTA RICA', en: 'MADRID → COSTA RICA' },
    narrative: {
      es: 'Nos trasladaremos al aeropuerto para tomar nuestro vuelo de regreso a Costa Rica. Finalizaremos esta experiencia europea después de recorrer Londres, Escocia, Irlanda, Madrid y Toledo junto a Vora Travel.',
      en: 'We will transfer to the airport to take our return flight to Costa Rica. We will finish this European experience after traveling through London, Scotland, Ireland, Madrid, and Toledo with Vora Travel.',
    },
    sections: [],
    image: '/images/scotland-2026/day-04-retorno.webp',
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

export default async function Scotland2026Page({ params }: ScotlandPageProps) {
  const { locale: localeParam } = await params
  const locale: Locale = localeParam === 'en' ? 'en' : 'es'
  const isEs = locale === 'es'
  const tourName = isEs ? 'Tierras Celtas & España Imperial' : 'Celtic Lands & Imperial Spain'
  
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
    ? [
        'Grandes capitales europeas',
        'Castillos medievales',
        'Paisajes de montaña',
        'Acantilados frente al Atlántico',
        'Calles históricas',
        'Gastronomía local',
        'Cultura británica, escocesa, irlandesa y española',
        'Tiempo libre para disfrutar a nuestro ritmo',
      ]
    : [
        'Major European capitals',
        'Medieval castles',
        'Mountain landscapes',
        'Atlantic ocean cliffs',
        'Historic streets',
        'Local gastronomy',
        'British, Scottish, Irish and Spanish culture',
        'Free time to enjoy at your own pace',
      ]

  const includes = isEs
    ? [
        'Tiquetes aéreos internacionales e internos',
        'Hospedaje en hoteles categoría 3 estrellas',
        'City tour en Londres',
        'City tour en Edimburgo',
        'Excursión a las Highlands de Escocia y Lago Ness',
        'City tour panorámico en Dublín',
        'Excursión a los Cliffs of Moher',
        'City tour en Madrid',
        'Excursión incluida a Toledo',
        'Artículo personal incluido',
        'Acompañamiento durante el recorrido',
      ]
    : [
        'International and internal flights',
        'Accommodation in 3-star hotels',
        'London city tour',
        'Edinburgh city tour',
        'Scottish Highlands and Loch Ness excursion',
        'Dublin panoramic city tour',
        'Cliffs of Moher excursion',
        'Madrid city tour',
        'Toledo excursion included',
        'Personal item included',
        'Assistance throughout the route',
      ]

  const optionalByDate: Record<string, string[]> = {
    '24 SEP': ['Crucero por el río Támesis'],
    '30 SEP': ['Guinness Storehouse', 'Malahide Castle', 'Howth Coastal Tour'],
  }

  const featuredExperiences = isEs
    ? [
        'Londres Imperial',
        'Castillo de Edimburgo',
        'Highlands de Escocia',
        'Lago Ness',
        'Cliffs of Moher',
        'Toledo Medieval',
        'Gastronomía europea',
      ]
    : [
        'Imperial London',
        'Edinburgh Castle',
        'Scottish Highlands',
        'Loch Ness',
        'Cliffs of Moher',
        'Medieval Toledo',
        'European gastronomy',
      ]

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
              {isEs ? 'TIERRAS CELTAS & ESPAÑA IMPERIAL' : 'CELTIC LANDS & IMPERIAL SPAIN'}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              {isEs
                ? 'LONDRES – ESCOCIA – IRLANDA – MADRID – TOLEDO'
                : 'LONDON – SCOTLAND – IRELAND – MADRID – TOLEDO'}
            </p>
            <div className="mt-2 text-sm text-white/80">
              {isEs ? '22 SEPTIEMBRE AL 4 OCTUBRE 2026' : 'SEPTEMBER 22 TO OCTOBER 4, 2026'}
            </div>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/80">{isEs ? 'Desde' : 'From'}</span>
              <span className="text-3xl font-bold text-[#FCD34D]">$2,950</span>
              <span className="text-sm text-white/70">USD / {isEs ? 'persona' : 'person'}</span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HeroCtaModal
                tourSlug="tierras-celtas-espana-imperial"
                tourName={{
                  es: 'Tierras Celtas & España Imperial',
                  en: 'Celtic Lands & Imperial Spain',
                }}
                availableDates={[
                  {
                    value: 'Tierras Celtas - Del 22 de Sept al 4 de Oct 2026',
                    label: {
                      es: 'Tierras Celtas - Del 22 de Sept al 4 de Oct 2026',
                      en: 'Celtic Lands - Sep 22 to Oct 4, 2026',
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
                ? 'En esta experiencia vamos a recorrer una de las combinaciones más atractivas de Europa: la elegancia de Londres, la historia medieval de Escocia, los paisajes naturales de Irlanda y el encanto imperial de Madrid y Toledo.'
                : 'On this experience, we will travel one of Europe\'s most attractive combinations: the elegance of London, the medieval history of Scotland, the natural landscapes of Ireland, and the imperial charm of Madrid and Toledo.'}
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
                ? 'He diseñado esta ruta para que podamos aprovechar el viaje de forma equilibrada, combinando días de tour, vuelos internos, paisajes naturales, ciudades históricas y espacios libres para descansar, comprar o tomar excursiones opcionales.'
                : 'I designed this route so we can make the most of the trip in a balanced way, combining tour days, internal flights, natural landscapes, historic cities, and free time to rest, shop, or take optional excursions.'}
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
            <div className="mt-6 space-y-2 text-sm">
              <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.1em] text-white/80">
                {isEs ? 'ITINERARIO SUJETO A CAMBIOS' : 'ITINERARY SUBJECT TO CHANGES'}
              </p>
              <p className="text-white/80">
                {isEs ? '13 días de experiencia' : '13 days of experience'}
              </p>
              <p className="text-white/80">
                {isEs ? '12 noches de hospedaje' : '12 nights of accommodation'}
              </p>
              <p className="text-white/80">
                {isEs ? '8 días con tours y actividades organizadas' : '8 days with organized tours and activities'}
              </p>
              <p className="text-white/80">
                {isEs ? '2 espacios libres con tours opcionales' : '2 free days with optional tours'}
              </p>
            </div>
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
            image: '/images/scotland-2026/testimonio-1.webp',
            quote: {
              es: '"Las Highlands de Escocia fueron uno de los momentos más mágicos del viaje. Los paisajes son simplemente impresionantes."',
              en: '"The Scottish Highlands were one of the most magical moments of the trip. The landscapes are simply stunning."',
            },
            name: 'María G.',
            city: 'Costa Rica',
          },
          {
            id: 'exp-002',
            image: '/images/scotland-2026/testimonio-2.webp',
            quote: {
              es: '"La combinación de Londres, Escocia, Irlanda y España fue perfecta. Cada ciudad tiene su encanto único."',
              en: '"The combination of London, Scotland, Ireland and Spain was perfect. Each city has its unique charm."',
            },
            name: 'Carlos & Ana',
            city: 'Colombia',
          },
          {
            id: 'exp-003',
            image: '/images/scotland-2026/testimonio-3.webp',
            quote: {
              es: '"Los Cliffs of Moher son impresionantes. Ver el Atlántico desde esos acantilados fue una experiencia inolvidable."',
              en: '"The Cliffs of Moher are breathtaking. Seeing the Atlantic from those cliffs was an unforgettable experience."',
            },
            name: 'Diego R.',
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
                ? 'Durante el recorrido nos hospedaremos en hoteles categoría 3 estrellas cuidadosamente seleccionados por ubicación, comodidad y conexión con transporte público.'
                : 'During the route, we stay in carefully selected 3-star hotels for location, comfort and connectivity with public transport.'}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              {(isEs ? ['céntricos', 'seguros', 'cómodos para grupos', 'bien conectados', 'cercanos a estaciones, aeropuertos o zonas turísticas'] : ['central', 'safe', 'group-friendly', 'well connected', 'close to stations, airports or tourist areas']).map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-3 py-2">{item}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-xs text-white/75">
              <p className="font-semibold text-[#F4D89F]">{isEs ? 'ARTÍCULO PERSONAL INCLUIDO' : 'PERSONAL ITEM INCLUDED'}</p>
              <p>{isEs ? 'Bolso o mochila pequeña para colocar debajo del asiento' : 'Small bag or backpack to place under the seat'}</p>
              <p>{isEs ? 'Medidas aproximadas: 40 x 30 x 20 cm' : 'Approximate dimensions: 40 x 30 x 20 cm'}</p>
              <p className="mt-3">{isEs ? 'Equipaje de mano y equipaje documentado disponibles con costo adicional (sujeto a aerolínea).' : 'Carry-on and checked baggage available with additional cost (subject to airline).'}</p>
            </div>
          </article>

          <article className="rounded-3xl border border-[#D6AE5C]/40 bg-[#002E5A] p-7">
            <h2 className="font-display text-3xl font-bold text-[#F4D89F]">
              {isEs ? 'INFORMACIÓN IMPORTANTE' : 'IMPORTANT INFORMATION'}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85 sm:text-base">
              {(isEs
                ? [
                    'Septiembre y octubre son buenas fechas para recorrer Europa',
                    'Recomendamos llevar zapato cómodo',
                    'Adaptador europeo y británico recomendados',
                    'Seguro de viaje recomendado',
                    'Algunas actividades pueden variar según clima o disponibilidad',
                    'El orden del itinerario puede variar por logística operativa',
                    'Horarios finales serán confirmados previo a la salida',
                    'Las entradas a monumentos específicos pueden depender de disponibilidad',
                    'Los tours opcionales tienen costo adicional',
                  ]
                : [
                    'September and October are good months to travel Europe',
                    'Comfortable shoes are recommended',
                    'European and British adapters recommended',
                    'Travel insurance recommended',
                    'Some activities may vary due to weather or availability',
                    'The itinerary order can vary due to operational logistics',
                    'Final schedules are confirmed before departure',
                    'Entry to specific monuments may depend on availability',
                    'Optional tours have additional cost',
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
