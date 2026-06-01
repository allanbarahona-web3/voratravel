import Image from 'next/image'
import { MapPin, Globe, Shield, Sparkles, Heart, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params
  const locale = localeParam === 'en' ? 'en' : 'es'
  const isEs = locale === 'es'

  const offerings = [
    {
      icon: Globe,
      title: isEs ? 'Turismo Internacional' : 'International Tourism',
      desc: isEs 
        ? 'Experiencias grupales y personalizadas hacia los destinos más fascinantes del mundo. Europa, México, Medio Oriente y nuevos destinos cuidadosamente seleccionados.'
        : 'Group and personalized experiences to the world\'s most fascinating destinations. Europe, Mexico, Middle East and carefully selected new destinations.',
    },
    {
      icon: MapPin,
      title: isEs ? 'Turismo Nacional' : 'National Tourism',
      desc: isEs
        ? 'Descubre volcanes, montañas, playas, cultura y destinos únicos dentro de Costa Rica. Promovemos el turismo local con experiencias naturales incomparables.'
        : 'Discover volcanoes, mountains, beaches, culture and unique destinations within Costa Rica. We promote local tourism with incomparable natural experiences.',
    },
    {
      icon: Shield,
      title: isEs ? 'Seguros de Viaje' : 'Travel Insurance',
      desc: isEs
        ? 'Asistencia y seguros para viajes nacionales e internacionales. Viajar con respaldo es fundamental para tu tranquilidad durante cada aventura.'
        : 'Assistance and insurance for national and international trips. Traveling with support is essential for your peace of mind during each adventure.',
    },
    {
      icon: Sparkles,
      title: isEs ? 'Experiencias Personalizadas' : 'Custom Experiences',
      desc: isEs
        ? 'Itinerarios diseñados a medida para parejas, grupos, familias y viajeros con intereses específicos. Flexibilidad adaptada a ti.'
        : 'Customized itineraries for couples, groups, families and travelers with specific interests. Flexibility tailored to you.',
    },
  ]

  const whyChoose = [
    isEs ? 'Atención personalizada' : 'Personalized attention',
    isEs ? 'Viajes nacionales e internacionales' : 'National and international trips',
    isEs ? 'Experiencias grupales y privadas' : 'Group and private experiences',
    isEs ? 'Itinerarios cuidadosamente planificados' : 'Carefully planned itineraries',
    isEs ? 'Seguros y asistencia de viaje' : 'Travel insurance and assistance',
    isEs ? 'Acompañamiento antes y durante' : 'Support before and during the trip',
    isEs ? 'Compromiso con la calidad' : 'Commitment to quality',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/europe-2026/hero-europa-vora-travel.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-brand-navy/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
              {isEs ? 'Vora Travel' : 'Vora Travel'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {isEs
                ? 'Viajes diseñados para crear experiencias inolvidables'
                : 'Journeys designed to create unforgettable experiences'}
            </p>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              {isEs
                ? 'Creemos que viajar va mucho más allá de visitar destinos. Es descubrir nuevas culturas, conectar con personas y crear recuerdos para toda la vida.'
                : 'We believe that traveling goes far beyond visiting destinations. It\'s about discovering new cultures, connecting with people, and creating memories for a lifetime.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {isEs ? 'Quiénes Somos' : 'Who We Are'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {isEs
                ? 'Somos una agencia de viajes con visión internacional y raíces costarricenses, enfocada en ofrecer experiencias cuidadosamente planificadas, acompañamiento personalizado y soluciones de viaje seguras tanto dentro como fuera de Costa Rica.'
                : 'We are a travel agency with international vision and Costa Rican roots, focused on offering carefully planned experiences, personalized support, and safe travel solutions both within and outside Costa Rica.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-brand-navy mb-6">
                {isEs ? 'Nuestra Filosofía' : 'Our Philosophy'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {isEs
                  ? 'En Vora Travel entendemos que cada viajero es diferente. Por eso diseñamos experiencias adaptadas a distintos estilos de viaje, necesidades y expectativas.'
                  : 'At Vora Travel, we understand that every traveler is different. That\'s why we design experiences tailored to different travel styles, needs and expectations.'}
              </p>
              <div className="space-y-3">
                {[
                  isEs ? 'Organización profesional' : 'Professional organization',
                  isEs ? 'Experiencias auténticas' : 'Authentic experiences',
                  isEs ? 'Flexibilidad adaptada' : 'Tailored flexibility',
                  isEs ? 'Seguridad y respaldo' : 'Safety and support',
                  isEs ? 'Atención personalizada' : 'Personalized attention',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-gold mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/europe-2026/day-19-roma.webp"
                alt="Roma"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {isEs ? '¿Qué Ofrecemos?' : 'What We Offer'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offer) => {
              const IconComponent = offer.icon
              return (
                <div key={offer.title} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-brand-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{offer.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offer.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/europe-2026/day-22-milan.webp"
                alt="Milán"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-8">
                {isEs ? 'Nuestro Compromiso' : 'Our Commitment'}
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  isEs ? 'Atención cercana y profesional' : 'Close and professional attention',
                  isEs ? 'Información clara y transparente' : 'Clear and transparent information',
                  isEs ? 'Itinerarios bien organizados' : 'Well-organized itineraries',
                  isEs ? 'Acompañamiento antes y durante el viaje' : 'Support before and during the trip',
                  isEs ? 'Experiencias auténticas y memorables' : 'Authentic and memorable experiences',
                ].map((commitment) => (
                  <div key={commitment} className="flex items-start gap-3">
                    <Heart size={20} className="text-brand-gold mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{commitment}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {isEs
                  ? 'Cada viaje es importante para nosotros porque entendemos el valor que tiene para cada persona invertir tiempo, ilusión y recursos en una experiencia única.'
                  : 'Every trip is important to us because we understand the value that each person invests in time, hopes and resources in a unique experience.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold mb-8">
              {isEs ? 'Nuestra Visión' : 'Our Vision'}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {isEs
                ? 'Convertirnos en una agencia de viajes reconocida por la calidad de nuestras experiencias, el trato personalizado y la confianza que brindamos a nuestros viajeros.'
                : 'Become a travel agency recognized for the quality of our experiences, personalized service and the trust we provide to our travelers.'}
            </p>
            <p className="text-xl text-white/80">
              {isEs
                ? 'Queremos conectar personas con el mundo a través de experiencias auténticas, seguras y bien organizadas.'
                : 'We want to connect people with the world through authentic, safe and well-organized experiences.'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {isEs ? '¿Por qué elegir Vora Travel?' : 'Why Choose Vora Travel?'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((reason) => (
              <div key={reason} className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:bg-brand-cream transition-all">
                <Check size={24} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            {isEs ? 'Comienza tu próxima aventura' : 'Start your next adventure'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {isEs
              ? 'Explora nuestros tours, obtén información sobre seguros de viaje o contacta con nuestro equipo para diseñar tu experiencia ideal.'
              : 'Explore our tours, get information about travel insurance, or contact our team to design your ideal experience.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tours"
              className="btn-primary text-base py-4 px-12"
            >
              {isEs ? 'Ver Tours' : 'View Tours'}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-base py-4 px-12"
            >
              {isEs ? 'Contactanos' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
