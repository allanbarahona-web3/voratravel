import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  const values = [
    { emoji: '🌿', title: locale === 'es' ? 'Sostenibilidad' : 'Sustainability', desc: locale === 'es' ? 'Turismo responsable que cuida el planeta y las comunidades locales' : 'Responsible tourism that cares for the planet and local communities' },
    { emoji: '💎', title: locale === 'es' ? 'Excelencia' : 'Excellence', desc: locale === 'es' ? 'Cada detalle importa. Estándares de primera clase en cada servicio' : 'Every detail matters. First-class standards in every service' },
    { emoji: '🤝', title: locale === 'es' ? 'Autenticidad' : 'Authenticity', desc: locale === 'es' ? 'Experiencias genuinas, contacto real con la cultura y la naturaleza' : 'Genuine experiences, real contact with culture and nature' },
    { emoji: '❤️', title: locale === 'es' ? 'Pasión' : 'Passion', desc: locale === 'es' ? 'Somos viajeros apasionados que amamos lo que hacemos' : 'We are passionate travelers who love what we do' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618245318763-a15156d6b23c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full px-5 py-2 mb-6 text-sm font-semibold">
                🏷️ {t('story')}
              </div>
              <h2 className="section-title mb-6">{t('story')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{t('storyText')}</p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80"
                alt="Costa Rica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 text-2xl">🎯</div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{t('mission')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
            </div>
            <div className="bg-brand-navy rounded-2xl p-10 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold flex items-center justify-center mb-6 text-2xl">🚀</div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{t('vision')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('visionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{locale === 'es' ? 'Nuestros Valores' : 'Our Values'}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div key={val.title} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-card transition-all duration-300 group">
                <div className="text-4xl mb-4">{val.emoji}</div>
                <h4 className="font-display font-bold text-brand-navy text-xl mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
