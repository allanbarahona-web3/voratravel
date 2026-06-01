import type { Tour, InsurancePlan, Testimonial } from '@/types'

export const tours: Tour[] = [
  // ─── TOUR EUROPA: RUTA IMPERIAL Y ALPES EUROPEOS ───────────────────────────
  {
    id: 'tour-001',
    slug: 'ruta-imperial-europa',
    publicPath: '/europe-2026',
    published: true,
    travelType: 'outbound-from-cr',
    region: 'europe',
    featured: true,
    image: '/images/europe-2026/hero-europa-vora-travel.webp',
    gallery: [
      '/images/europe-2026/hero-europa-vora-travel.webp',
      '/images/europe-2026/day-17-madrid.webp',
      '/images/europe-2026/day-19-roma.webp',
      '/images/europe-2026/day-22-milan.webp',
      '/images/europe-2026/day-23-bernina-express.webp',
      '/images/europe-2026/day-24-trieste.webp',
    ],
    title: {
      es: 'Ruta Imperial y Alpes Europeos: Madrid, Roma, Milán, Suiza, Trieste & Eslovenia',
      en: 'Imperial Route and European Alps: Madrid, Rome, Milan, Switzerland, Trieste & Slovenia',
    },
    subtitle: {
      es: 'Un viaje de 15 días por las joyas del Viejo Mundo: historia, arte, naturaleza y el legendario Tren de Bernina',
      en: 'A 15-day journey through the Old World\'s jewels: history, art, nature and the legendary Bernina Express',
    },
    description: {
      es: 'Recorra los destinos más memorables de Europa en 15 días: la elegancia española de Madrid, la grandeza imperial de Roma, el glamour moderno de Milán, la excursión de ensueño en el Tren de Bernina por los Alpes suizos, la majestuosidad barroca de Viena y los paisajes de cuento de Eslovenia con el Lago Bled. Un itinerario diseñado para viajeros que quieren vivir Europa con profundidad, comodidad y guía especializada.',
      en: 'Journey through Europe\'s most memorable destinations in 15 days: the Spanish elegance of Madrid, the imperial grandeur of Rome, the modern glamour of Milan, a dream excursion on the Bernina Express through the Swiss Alps, the baroque majesty of Vienna, and the fairy-tale landscapes of Slovenia with Lake Bled. An itinerary designed for travelers who want to experience Europe with depth, comfort, and specialized guidance.',
    },
    duration: 15,
    price: 3500,
    currency: 'USD',
    maxGroupSize: 15,
    difficulty: 'easy',
    rating: 4.9,
    reviewCount: 47,
    destinations: ['Madrid', 'Roma', 'Milán', 'Suiza', 'Trieste', 'Eslovenia'],
    badge: { es: '¡Nuevo!', en: 'New!' },
    highlights: {
      es: [
        'Madrid: Plaza Mayor, Palacio Real, barrios históricos',
        'Roma: Coliseo Romano, Foro Romano, Fontana de Trevi, Panteón y Vaticano',
        'Tren Bernina Express desde Milán: uno de los recorridos ferroviarios más espectaculares del mundo (Patrimonio UNESCO)',
        'Viena: Palacio de Schönbrunn, Catedral de San Esteban, Prater y centro histórico',
        'Lago Bled, Eslovenia: tour con transporte y guía incluidos',
        'Ljubljana: la encantadora capital eslovena',
        'Hospedaje en Airbnb (apartamento compartido)',
      ],
      en: [
        'Madrid: Plaza Mayor, Royal Palace, historic neighborhoods',
        'Rome: Colosseum, Roman Forum, Trevi Fountain, Pantheon and Vatican',
        'Bernina Express from Milan: one of the world\'s most spectacular train journeys (UNESCO Heritage)',
        'Vienna: Schönbrunn Palace, St. Stephen\'s Cathedral, Prater and historic centre',
        'Lake Bled, Slovenia: tour with transport and guide included',
        'Ljubljana: Slovenia\'s charming capital city',
        'Accommodation in Airbnb (shared apartment)',
      ],
    },
    includes: {
      es: [
        'Tiquetes aéreos internacionales e internos (incluye tren Roma–Milán)',
        'Hospedaje Airbnb (apartamento compartido)',
        'Entrada al Coliseo Romano',
        'Tren Bernina Express',
        'Ingreso al Palacio de Schönbrunn',
        'Tour al Lago Bled (transporte desde punto de encuentro + guía)',
      ],
      en: [
        'International and internal air tickets (includes Rome–Milan train)',
        'Airbnb accommodation (shared apartment)',
        'Colosseum entry ticket',
        'Bernina Express train',
        'Schönbrunn Palace entrance',
        'Lake Bled tour (transport from meeting point + guide)',
      ],
    },
    excludes: {
      es: [
        'Comidas (excepto las indicadas en el itinerario)',
        'Gastos personales y propinas',
        'Actividades opcionales',
        'Seguro de viaje (disponible como add-on)',
      ],
      en: [
        'Meals (except those indicated in the itinerary)',
        'Personal expenses and tips',
        'Optional activities',
        'Travel insurance (available as add-on)',
      ],
    },
    itinerary: [
      {
        day: 1,
        location: 'San José → Madrid',
        title: { es: 'Salida hacia Madrid', en: 'Departure to Madrid' },
        description: {
          es: 'Vuelo internacional nocturno desde el Aeropuerto Juan Santamaría (SJO) con destino a Madrid Barajas. Inicio de nuestra aventura por Europa.',
          en: 'Overnight international flight from Juan Santamaría Airport (SJO) to Madrid Barajas. The start of our European adventure.',
        },
        activities: {
          es: ['Vuelo internacional SJO → MAD', 'Traslado al alojamiento'],
          en: ['International flight SJO → MAD', 'Transfer to accommodation'],
        },
        overnight: { es: 'Airbnb – Madrid', en: 'Airbnb – Madrid' },
      },
      {
        day: 2,
        location: 'Madrid',
        title: { es: 'Madrid: La Capital Española', en: 'Madrid: The Spanish Capital' },
        description: {
          es: 'Estadía en Madrid. Tiempo para explorar la ciudad: Puerta del Sol, Plaza Mayor, Palacio Real y sus barrios históricos. Por la tarde, vuelo interno Madrid → Roma.',
          en: 'Stay in Madrid. Time to explore the city: Puerta del Sol, Plaza Mayor, Royal Palace and historic neighborhoods. Afternoon flight Madrid → Rome.',
        },
        activities: {
          es: ['Plaza Mayor', 'Puerta del Sol', 'Palacio Real', 'Vuelo MAD → Roma'],
          en: ['Plaza Mayor', 'Puerta del Sol', 'Royal Palace', 'Flight MAD → Rome'],
        },
        overnight: { es: 'En vuelo', en: 'On board' },
      },
      {
        day: 3,
        location: 'Roma',
        title: { es: 'Llegada a Roma', en: 'Arrival in Rome' },
        description: {
          es: 'Llegada a Roma. Traslado al Airbnb y primer contacto con la Ciudad Eterna: el barrio de Trastévere y la Piazza Navona al caer la noche.',
          en: 'Arrival in Rome. Transfer to the Airbnb and first contact with the Eternal City: the Trastevere neighborhood and Piazza Navona at nightfall.',
        },
        activities: {
          es: ['Llegada Roma', 'Check-in', 'Barrio Trastévere', 'Piazza Navona'],
          en: ['Rome arrival', 'Check-in', 'Trastevere quarter', 'Piazza Navona'],
        },
        overnight: { es: 'Airbnb – Roma', en: 'Airbnb – Rome' },
      },
      {
        day: 4,
        location: 'Roma',
        title: { es: 'Coliseo, Foro Romano, Fontana di Trevi y Vaticano', en: 'Colosseum, Roman Forum, Trevi Fountain & Vatican' },
        description: {
          es: 'El gran día romano: entrada al Coliseo Romano y recorrido del Foro Romano. Por la tarde, Fontana di Trevi y el Panteón. Recorrido panorámico de la Ciudad del Vaticano.',
          en: 'The grand Roman day: entry to the Colosseum and tour of the Roman Forum. Afternoon at the Trevi Fountain and the Pantheon. Panoramic tour of Vatican City.',
        },
        activities: {
          es: ['Coliseo Romano (entrada incluida)', 'Foro Romano', 'Fontana di Trevi', 'Panteón', 'Vaticano'],
          en: ['Colosseum (entry included)', 'Roman Forum', 'Trevi Fountain', 'Pantheon', 'Vatican'],
        },
        overnight: { es: 'Airbnb – Roma', en: 'Airbnb – Rome' },
      },
      {
        day: 5,
        location: 'Roma → Milán',
        title: { es: 'Tren a Milán', en: 'Train to Milan' },
        description: {
          es: 'Abordamos el tren de alta velocidad Roma–Milán (incluido). Llegada a Milán y tarde libre para explorar el Duomo, la Galleria Vittorio Emanuele II y el barrio Brera.',
          en: 'Board the high-speed Rome–Milan train (included). Arrival in Milan and free afternoon to explore the Duomo, Galleria Vittorio Emanuele II and the Brera district.',
        },
        activities: {
          es: ['Tren Roma → Milán (incluido)', 'Duomo di Milano', 'Galleria Vittorio Emanuele', 'Brera'],
          en: ['Rome → Milan train (included)', 'Milan Cathedral', 'Vittorio Emanuele Gallery', 'Brera'],
        },
        overnight: { es: 'Airbnb – Milán', en: 'Airbnb – Milan' },
      },
      {
        day: 6,
        location: 'Suiza — Bernina Express',
        title: { es: 'Excursión a Suiza: El Tren de Bernina', en: 'Switzerland Day Trip: The Bernina Express' },
        description: {
          es: 'Día completo de excursión desde Milán a Suiza a bordo del legendario Tren de Bernina (Patrimonio UNESCO): el ferrocarril de altitud más elevada de los Alpes. Glaciares, viaductos curvos y aldeas alpinas de postal antes de regresar a Milán.',
          en: 'Full day excursion from Milan to Switzerland aboard the legendary Bernina Express (UNESCO Heritage): the highest altitude railway in the Alps. Glaciers, curved viaducts and picture-perfect Alpine villages before returning to Milan.',
        },
        activities: {
          es: ['Bernina Express (incluido)', 'Paso Bernina 2253m', 'Glaciares alpinos', 'Regreso a Milán'],
          en: ['Bernina Express (included)', 'Bernina Pass 2253m', 'Alpine glaciers', 'Return to Milan'],
        },
        overnight: { es: 'Airbnb – Milán', en: 'Airbnb – Milan' },
      },
      {
        day: 7,
        location: 'Milán → Viena',
        title: { es: 'Vuelo a Viena: La Capital Imperial', en: 'Flight to Vienna: The Imperial Capital' },
        description: {
          es: 'Vuelo Milán → Viena. Llegada y primer paseo por la Viena imperial: visita panorámica al Palacio de Schönbrunn y los jardines reales con sus fuentes y estatuas barrocas.',
          en: 'Flight Milan → Vienna. Arrival and first stroll through imperial Vienna: panoramic visit to Schönbrunn Palace and the royal gardens with baroque fountains and statues.',
        },
        activities: {
          es: ['Vuelo Milán → Viena', 'Palacio de Schönbrunn (exterior y jardines)'],
          en: ['Milan → Vienna flight', 'Schönbrunn Palace (exterior & gardens)'],
        },
        overnight: { es: 'Airbnb – Viena', en: 'Airbnb – Vienna' },
      },
      {
        day: 8,
        location: 'Viena',
        title: { es: 'Viena Imperial: Schönbrunn, San Esteban y el Prater', en: 'Imperial Vienna: Schönbrunn, St. Stephen\'s & the Prater' },
        description: {
          es: 'Día completo en Viena. Mañana con entrada al Palacio de Schönbrunn (incluida): los fastuosos salones imperiales de los Habsburgo. A continuación, recorrido por el centro histórico: la imponente Catedral de San Esteban y el Prater con la icónica Noria Gigante.',
          en: 'Full day in Vienna. Morning with entry to Schönbrunn Palace (included): the magnificent Habsburg imperial halls. Then a tour of the historic centre: the imposing St. Stephen\'s Cathedral and the Prater with its iconic Giant Ferris Wheel.',
        },
        activities: {
          es: ['Palacio de Schönbrunn (entrada incluida)', 'Catedral de San Esteban', 'Prater y Noria Gigante', 'Centro histórico'],
          en: ['Schönbrunn Palace (entry included)', "St. Stephen's Cathedral", 'Prater & Giant Ferris Wheel', 'Historic centre'],
        },
        overnight: { es: 'Airbnb – Viena', en: 'Airbnb – Vienna' },
      },
      {
        day: 9,
        location: 'Viena',
        title: { es: 'Día Libre en Viena', en: 'Free Day in Vienna' },
        description: {
          es: 'Jornada libre para explorar Viena a su ritmo: los mercados de la Naschmarkt, los cafés vieneses históricos (Sacher Torte incluida), el Kunsthistorisches Museum o la ópera. Viena invita a perderse.',
          en: 'Free day to explore Vienna at your own pace: the Naschmarkt, historic Viennese coffee houses (Sacher Torte included), the Kunsthistorisches Museum or the opera house. Vienna invites you to get lost.',
        },
        activities: {
          es: ['Día libre', 'Naschmarkt (opcional)', 'Cafés vieneses', 'Museos (opcional)'],
          en: ['Free day', 'Naschmarkt (optional)', 'Viennese coffee houses', 'Museums (optional)'],
        },
        overnight: { es: 'Airbnb – Viena', en: 'Airbnb – Vienna' },
      },
      {
        day: 10,
        location: 'Viena → Eslovenia',
        title: { es: 'Vuelo a Eslovenia', en: 'Flight to Slovenia' },
        description: {
          es: 'Vuelo Viena → Eslovenia. Llegada a Ljubljana, la encantadora capital eslovena: el puente Triple, el castillo sobre la colina y el pintoresco río Ljubljanica.',
          en: 'Flight Vienna → Slovenia. Arrival in Ljubljana, Slovenia\'s charming capital: the Triple Bridge, the castle on the hill and the picturesque Ljubljanica river.',
        },
        activities: {
          es: ['Vuelo Viena → Liubliana', 'Puente Triple', 'Castillo de Ljubljana (panorama)', 'Río Ljubljanica'],
          en: ['Vienna → Ljubljana flight', 'Triple Bridge', 'Ljubljana Castle (panorama)', 'Ljubljanica river'],
        },
        overnight: { es: 'Airbnb – Ljubljana', en: 'Airbnb – Ljubljana' },
      },
      {
        day: 11,
        location: 'Lago Bled, Eslovenia',
        title: { es: 'Tour al Lago Bled: La Joya de Eslovenia', en: 'Lake Bled Tour: Slovenia\'s Jewel' },
        description: {
          es: 'Tour completo al icónico Lago Bled con transporte desde el punto de encuentro y guía incluidos. El castillo sobre el acantilado, la pequeña isla con la iglesia fotografiada en millones de postales y las montañas nevadas de fondo. Un lugar que parece salido de un cuento.',
          en: 'Full tour to iconic Lake Bled with transport from the meeting point and guide included. The clifftop castle, the tiny island with the church photographed on millions of postcards, and snowy mountains in the background. A place that looks like it came out of a fairy tale.',
        },
        activities: {
          es: ['Tour Lago Bled (transporte + guía incluidos)', 'Castillo de Bled', 'Isla de Bled', 'Iglesia de la Asunción'],
          en: ['Lake Bled tour (transport + guide included)', 'Bled Castle', 'Bled Island', 'Church of the Assumption'],
        },
        overnight: { es: 'Airbnb – Ljubljana', en: 'Airbnb – Ljubljana' },
      },
      {
        day: 12,
        location: 'Ljubljana, Eslovenia',
        title: { es: 'Día Libre en Ljubljana', en: 'Free Day in Ljubljana' },
        description: {
          es: 'Día libre en la capital eslovena para descubrir su casco histórico a pie: el mercado central, las calles del Barrio Antiguo, las terrazas sobre el río y la cultura local. Ljubljana es una de las ciudades más caminables de Europa.',
          en: 'Free day in the Slovenian capital to discover its historic centre on foot: the central market, the streets of the Old Town, the riverside terraces and local culture. Ljubljana is one of Europe\'s most walkable cities.',
        },
        activities: {
          es: ['Día libre', 'Mercado central', 'Barrio Antiguo', 'Terraza ribereña'],
          en: ['Free day', 'Central market', 'Old Town', 'Riverside terraces'],
        },
        overnight: { es: 'Airbnb – Ljubljana', en: 'Airbnb – Ljubljana' },
      },
      {
        day: 13,
        location: 'Ljubljana → Madrid',
        title: { es: 'Vuelos de Regreso a Madrid', en: 'Return Flights to Madrid' },
        description: {
          es: 'Jornada de vuelos: Ljubljana → Madrid (con posible escala). Llegada a la capital española y traslado al alojamiento para la última noche europea.',
          en: 'Day of flights: Ljubljana → Madrid (possible stopover). Arrival in the Spanish capital and transfer to accommodation for the last European night.',
        },
        activities: {
          es: ['Vuelo Ljubljana → Madrid', 'Llegada Madrid'],
          en: ['Ljubljana → Madrid flight', 'Madrid arrival'],
        },
        overnight: { es: 'Airbnb – Madrid', en: 'Airbnb – Madrid' },
      },
      {
        day: 14,
        location: 'Madrid',
        title: { es: 'Último Día en Madrid', en: 'Last Day in Madrid' },
        description: {
          es: 'Día libre en Madrid para disfrutar la ciudad una última vez: compras de souvenirs en el Rastro, tapas en La Latina, una última visita al Retiro o simplemente descansar antes del gran viaje de regreso.',
          en: 'Free day in Madrid to enjoy the city one last time: souvenir shopping at El Rastro, tapas in La Latina, a final visit to Retiro Park, or simply rest before the long journey home.',
        },
        activities: {
          es: ['Día libre', 'El Rastro (opcional)', 'Parque del Retiro (opcional)', 'Tapas en La Latina'],
          en: ['Free day', 'El Rastro (optional)', 'Retiro Park (optional)', 'Tapas in La Latina'],
        },
        overnight: { es: 'Airbnb – Madrid', en: 'Airbnb – Madrid' },
      },
      {
        day: 15,
        location: 'Madrid → San José, Costa Rica',
        title: { es: 'Retorno a Costa Rica', en: 'Return to Costa Rica' },
        description: {
          es: 'Vuelo de regreso desde Madrid Barajas hacia el Aeropuerto Internacional Juan Santamaría (SJO). Fin de la Ruta Imperial y Alpes Europeos con memorias para toda la vida.',
          en: 'Return flight from Madrid Barajas to Juan Santamaría International Airport (SJO). End of the Imperial Route and European Alps with lifelong memories.',
        },
        activities: {
          es: ['Check-out', 'Traslado Aeropuerto Barajas', 'Vuelo MAD → SJO'],
          en: ['Check-out', 'Transfer to Barajas Airport', 'Flight MAD → SJO'],
        },
        overnight: { es: 'En vuelo', en: 'On board' },
      },
    ],
    experiences: [
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
    ],
    upcomingDates: [
      '2026-10-06', '2027-04-12', '2027-10-05',
    ],
  },
  {
    id: 'tour-002',
    slug: 'gran-tour-madrid-turquia-egipto-grecia',
    publicPath: '/madrid-turquia-egipto-grecia',
    published: true,
    travelType: 'outbound-from-cr',
    region: 'europe',
    featured: false,
    image: '/images/Gran Ruta Mediterranea/Hero Ruta Mediterranea.webp',
    gallery: [
      '/images/Gran Ruta Mediterranea/Hero Ruta Mediterranea.webp',
    ],
    title: {
      es: 'Gran Ruta Mediterranea: Madrid, Turquia, Egipto y Grecia',
      en: 'Mediterranean Grand Route: Madrid, Turkey, Egypt and Greece',
    },
    subtitle: {
      es: 'Nuevo lanzamiento en planificacion para viajeros que quieren historia, cultura y experiencias iconicas',
      en: 'Upcoming launch for travelers seeking iconic history, culture and experiences',
    },
    description: {
      es: 'Estamos trabajando en una nueva experiencia internacional que conecta Madrid, Estambul, El Cairo y Atenas. Muy pronto publicaremos itinerario completo, inclusiones y fechas confirmadas.',
      en: 'We are preparing a new international experience connecting Madrid, Istanbul, Cairo and Athens. Full itinerary, inclusions and confirmed dates will be published soon.',
    },
    duration: 14,
    price: 0,
    currency: 'USD',
    maxGroupSize: 15,
    difficulty: 'easy',
    rating: 5,
    reviewCount: 0,
    destinations: ['Madrid', 'Estambul', 'El Cairo', 'Atenas'],
    badge: { es: 'Proximamente', en: 'Coming Soon' },
    highlights: {
      es: ['Madrid', 'Turquia', 'Egipto', 'Grecia'],
      en: ['Madrid', 'Turkey', 'Egypt', 'Greece'],
    },
    includes: {
      es: ['Itinerario en preparacion'],
      en: ['Itinerary in preparation'],
    },
    excludes: {
      es: ['Detalles por confirmar'],
      en: ['Details to be confirmed'],
    },
    itinerary: [],
    upcomingDates: [],
  },
  {
    id: 'tour-003',
    slug: 'ruta-colonial-mexica',
    publicPath: '/ruta-colonial-mexica',
    published: true,
    travelType: 'outbound-from-cr',
    region: 'other',
    featured: false,
    image: '/images/mexico/ruta_colonial_mexicana_hero.webp',
    gallery: [
      '/images/mexico/ruta_colonial_mexicana_hero.webp',
    ],
    title: {
      es: 'Ruta Colonial Mexica: CDMX, Guanajuato, Leon y Guadalajara',
      en: 'Mexican Colonial Route: Mexico City, Guanajuato, Leon and Guadalajara',
    },
    subtitle: {
      es: 'Recorrido cultural de 8 dias por ciudades iconicas de Mexico',
      en: 'An 8-day cultural journey through iconic Mexican cities',
    },
    description: {
      es: 'Descubre la esencia colonial y moderna de Mexico en una ruta compacta de 8 dias: arquitectura historica, gastronomia, cultura viva y experiencias urbanas en CDMX, Guanajuato, Leon y Guadalajara.',
      en: 'Discover Mexico\'s colonial and modern essence in a compact 8-day route: historic architecture, local gastronomy, vibrant culture and urban experiences in Mexico City, Guanajuato, Leon and Guadalajara.',
    },
    duration: 8,
    price: 0,
    currency: 'USD',
    maxGroupSize: 15,
    difficulty: 'easy',
    rating: 5,
    reviewCount: 0,
    destinations: ['CDMX', 'Guanajuato', 'Leon', 'Guadalajara'],
    badge: { es: 'Nuevo', en: 'New' },
    highlights: {
      es: ['Centro Historico de CDMX', 'Callejones de Guanajuato', 'Leon cultural', 'Guadalajara tradicional'],
      en: ['Mexico City Historic Center', 'Guanajuato alleyways', 'Cultural Leon', 'Traditional Guadalajara'],
    },
    includes: {
      es: ['Itinerario en preparacion'],
      en: ['Itinerary in preparation'],
    },
    excludes: {
      es: ['Detalles por confirmar'],
      en: ['Details to be confirmed'],
    },
    itinerary: [],
    upcomingDates: ['2027-02-27', '2027-03-06'],
  },
]

export function getPublishedTours(): Tour[] {
  return tours.filter((tour) => tour.published)
}

export function getPublishedTourDestinations(): string[] {
  return Array.from(new Set(getPublishedTours().flatMap((tour) => tour.destinations)))
}

export function getTourHref(tour: Tour): string {
  return tour.publicPath ?? `/tours/${tour.slug}`
}

export const insurancePlans: InsurancePlan[] = [
  {
    id: 'ins-basic',
    name: { es: 'Plan Básico', en: 'Basic Plan' },
    description: {
      es: 'Cobertura esencial para viajes nacionales e internacionales (USD 35,000 a USD 60,000)',
      en: 'Essential coverage for domestic and international trips (USD 35,000 to USD 60,000)',
    },
    pricePerDay: 3.5,
    maxCoverage: 60000,
    recommended: false,
    features: {
      es: [
        'Asistencia médica por accidente o enfermedad',
        'Cobertura médica hasta $60,000 (según plan emitido)',
        'Repatriación y traslados sanitarios',
        'Equipaje y documentos',
        'Asistencia telefónica 24/7',
      ],
      en: [
        'Medical assistance for accidents or illness',
        'Medical coverage up to $60,000 (depending on issued plan)',
        'Repatriation and medical transport',
        'Baggage and documents',
        '24/7 phone assistance',
      ],
    },
  },
  {
    id: 'ins-standard',
    name: { es: 'Plan Estándar', en: 'Standard Plan' },
    description: {
      es: 'Cobertura intermedia para viajes nacionales e internacionales',
      en: 'Mid-level coverage for domestic and international trips',
    },
    pricePerDay: 5.5,
    maxCoverage: 150000,
    recommended: true,
    features: {
      es: [
        'Emergencia médica hasta $150,000',
        'Cancelación e interrupción de viaje (según condiciones)',
        'Repatriación médica y traslados',
        'Equipaje y documentos ampliado',
        'COVID-19 incluido',
        'Asistencia legal básica',
        'Soporte 24/7',
      ],
      en: [
        'Medical emergency up to $150,000',
        'Trip cancellation and interruption (terms apply)',
        'Medical repatriation and transport',
        'Extended baggage and documents support',
        'COVID-19 included',
        'Basic legal assistance',
        '24/7 support',
      ],
    },
  },
  {
    id: 'ins-premium',
    name: { es: 'Plan Premium', en: 'Premium Plan' },
    description: {
      es: 'Cobertura alta para viajes de mayor exposición',
      en: 'Higher coverage for trips with greater exposure',
    },
    pricePerDay: 8.5,
    maxCoverage: 500000,
    recommended: false,
    features: {
      es: [
        'Emergencia médica hasta $500,000',
        'Cancelación por cualquier causa',
        'Repatriación médica aérea',
        'Pérdida de equipaje hasta $5,000',
        'Deportes extremos y aventura',
        'Responsabilidad civil $200,000',
        'Evacuación política',
        'Interrupción de viaje',
        'Atención médica dónde estés',
        'Gestor de viaje personal',
      ],
      en: [
        'Medical emergency up to $500,000',
        'Cancel for any reason',
        'Air medical repatriation',
        'Baggage loss up to $5,000',
        'Extreme and adventure sports',
        'Civil liability $200,000',
        'Political evacuation',
        'Trip interruption',
        'Medical care wherever you are',
        'Personal travel manager',
      ],
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ana Rodríguez',
    country: 'Costa Rica',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80',
    rating: 5,
    tour: { es: 'Ruta Imperial y Alpes Europeos', en: 'Imperial Route and European Alps' },
    text: {
      es: '"La Ruta Imperial y Alpes Europeos superó todas mis expectativas. El itinerario estuvo perfecto: Roma, Viena, el Tren de Bernina y el Lago Bled. Una experiencia impresionante. ¡Volveré con Voratravel sin duda!"',
      en: '"The Imperial Route and European Alps exceeded all my expectations. The itinerary was perfect: Rome, Vienna, the Bernina Express and Lake Bled. An impressive experience. I\'ll definitely return with Voratravel!"',
    },
  },
  {
    id: 't2',
    name: 'James Thompson',
    country: 'United States',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    tour: { es: 'Lo Mejor de Costa Rica', en: 'Best of Costa Rica' },
    text: {
      es: '"Costa Rica con Voratravel fue una experiencia transformadora. La guía naturalista sabía todo sobre cada especie que encontramos. Vimos 4 tipos de monos, quetzales y hasta un jaguar. Increíble."',
      en: '"Costa Rica with Voratravel was a transformative experience. The naturalist guide knew everything about every species we encountered. We saw 4 types of monkeys, quetzals, and even a jaguar. Incredible."',
    },
  },
  {
    id: 't3',
    name: 'María Isabel Vargas',
    country: 'Colombia',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    rating: 5,
    tour: { es: 'Lo Mejor de Costa Rica', en: 'Best of Costa Rica' },
    text: {
      es: '"Desde la primera consulta hasta el regreso a casa, Voratravel demostró ser una agencia de primera clase. Todo perfectamente organizado, atención al detalle impecable. Ya estamos planeando el tour a Europa."',
      en: '"From the first consultation to the return home, Voratravel proved to be a first-class agency. Everything perfectly organized, impeccable attention to detail. We\'re already planning the Europe tour."',
    },
  },
]

export const costaRicaDestinations = [
  {
    name: 'Volcán Arenal',
    image: 'https://images.unsplash.com/photo-1618245318763-a15156d6b23c?w=800&q=80',
    description: { es: 'El volcán más activo de Centroamérica con aguas termales naturales', en: 'The most active volcano in Central America with natural hot springs' },
  },
  {
    name: 'Monteverde',
    image: 'https://images.unsplash.com/photo-1553944587-4c2f7cdfa4c6?w=800&q=80',
    description: { es: 'Bosque nuboso místico con quetzales y puentes colgantes', en: 'Mystical cloud forest with quetzals and hanging bridges' },
  },
  {
    name: 'Manuel Antonio',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
    description: { es: 'Playas paradisíacas en el Pacífico con monos y perezosos', en: 'Paradise beaches on the Pacific with monkeys and sloths' },
  },
  {
    name: 'Tortuguero',
    image: 'https://images.unsplash.com/photo-1580968928298-4c31b9b0f21d?w=800&q=80',
    description: { es: 'Canales del Caribe, tortugas y la Amazonía costarricense', en: 'Caribbean canals, sea turtles and the Costa Rican Amazon' },
  },
]
