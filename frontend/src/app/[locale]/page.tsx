import { redirect } from 'next/navigation'

interface LocaleHomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params
  redirect(`/${locale}/europe-2026`)
}
