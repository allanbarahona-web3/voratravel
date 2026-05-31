import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voratravel — Agencia de Viajes Internacional',
  description: 'Agencia de viajes internacional especializada en turismo hacia Costa Rica y viajes al exterior. Tours a Europa, Costa Rica y más.',
  keywords: 'agencia de viajes, Costa Rica, tours Europa, turismo, viajes internacionales, Voratravel',
  openGraph: {
    title: 'Voratravel — Agencia de Viajes Internacional',
    description: 'Descubra el mundo con Voratravel. Tours a Costa Rica, Europa y destinos exclusivos.',
    siteName: 'Voratravel',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
