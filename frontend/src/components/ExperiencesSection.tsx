'use client'

import Image from 'next/image'
import type { TourExperience } from '@/types'

interface ExperiencesSectionProps {
  experiences: TourExperience[]
  locale: 'es' | 'en'
  tourName?: string
}

export default function ExperiencesSection({ experiences, locale, tourName }: ExperiencesSectionProps) {
  const isEs = locale === 'es'

  const sectionTitle = isEs ? 'EXPERIENCIAS DEL VIAJE' : 'TRAVEL EXPERIENCES'
  const sectionSubtitle = isEs
    ? 'Lo que nuestros viajeros viven y comparten'
    : 'What our travelers experience and share'

  if (!experiences || experiences.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#003B73] sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666B7A] sm:text-base">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#F5F7FA]">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 py-5">
                {/* Quote */}
                <blockquote className="flex-1 text-sm leading-relaxed text-[#4B5563] italic">
                  {experience.quote[locale]}
                </blockquote>

                {/* Author */}
                <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                  <p className="font-semibold text-[#003B73]">{experience.name}</p>
                  {experience.city && (
                    <p className="text-xs text-[#888E9B]">{experience.city}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
