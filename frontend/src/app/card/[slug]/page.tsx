import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Mail, Phone, Globe, Download } from 'lucide-react'
import { getContact } from '@/lib/vcards/contacts'
import { getCardUrl } from '@/lib/vcards/getCardUrl'
import QRCodeCard from '@/components/qr/QRCodeCard'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  const contact = getContact(params.slug)
  if (!contact) return { title: 'Contact not found' }
  return {
    title: `${contact.name} — ${contact.company}`,
    description: `${contact.title} at ${contact.company}`,
  }
}

export default function CardPage({ params }: PageProps) {
  const contact = getContact(params.slug)

  if (!contact) notFound()

  const cardUrl = getCardUrl(params.slug)
  const vcardUrl = `/api/vcard/${params.slug}`

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1B2D4F] via-[#1B2D4F] to-[#0f1d35] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">

        {/* Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

          {/* Header stripe */}
          <div className="bg-gradient-to-r from-[#1B2D4F] to-[#2a4270] px-8 pt-10 pb-8 text-center relative">
            {/* Logo */}
            <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg overflow-hidden p-2">
              <Image
                src="/logo-vora-color.png"
                alt="Vora Travel"
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />
            </div>

            <h1 className="text-white font-bold text-2xl leading-tight">{contact.name}</h1>
            <p className="text-[#C8841E] font-medium text-sm mt-1">{contact.title}</p>
            <p className="text-white/60 text-xs mt-0.5 tracking-wide uppercase">{contact.company}</p>
          </div>

          {/* Contact details */}
          <div className="px-8 py-6 space-y-4">
            {/* Phone England */}
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1B2D4F]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C8841E]/10 transition-colors">
                <Phone size={16} className="text-[#1B2D4F] group-hover:text-[#C8841E] transition-colors" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">🇬🇧 England</p>
                <p className="text-[#1B2D4F] font-medium text-sm">{contact.phone}</p>
              </div>
            </a>

            {/* Phone USA */}
            {contact.phoneUSA && (
              <a
                href={`tel:${contact.phoneUSA.replace(/[\s()-]/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1B2D4F]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C8841E]/10 transition-colors">
                  <Phone size={16} className="text-[#1B2D4F] group-hover:text-[#C8841E] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">🇺🇸 USA</p>
                  <p className="text-[#1B2D4F] font-medium text-sm">{contact.phoneUSA}</p>
                </div>
              </a>
            )}

            {/* Phone Costa Rica */}
            {contact.phoneCR && (
              <a
                href={`tel:${contact.phoneCR.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1B2D4F]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C8841E]/10 transition-colors">
                  <Phone size={16} className="text-[#1B2D4F] group-hover:text-[#C8841E] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">🇨🇷 Costa Rica</p>
                  <p className="text-[#1B2D4F] font-medium text-sm">{contact.phoneCR}</p>
                </div>
              </a>
            )}

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1B2D4F]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C8841E]/10 transition-colors">
                <Mail size={16} className="text-[#1B2D4F] group-hover:text-[#C8841E] transition-colors" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Email</p>
                <p className="text-[#1B2D4F] font-medium text-sm">{contact.email}</p>
              </div>
            </a>

            {contact.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1B2D4F]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C8841E]/10 transition-colors">
                  <Globe size={16} className="text-[#1B2D4F] group-hover:text-[#C8841E] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Website</p>
                  <p className="text-[#1B2D4F] font-medium text-sm">{contact.website.replace('https://', '')}</p>
                </div>
              </a>
            )}
          </div>

          {/* Divider */}
          <div className="mx-8 border-t border-gray-100" />

          {/* CTA Buttons */}
          <div className="px-8 py-6 space-y-3">
            <a
              href={vcardUrl}
              download={`${params.slug}.vcf`}
              className="flex items-center justify-center gap-2 w-full bg-[#1B2D4F] hover:bg-[#2a4270] text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm"
            >
              <Download size={16} />
              Save Contact
            </a>

            {contact.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-[#1B2D4F] text-[#1B2D4F] hover:bg-[#1B2D4F] hover:text-white font-semibold py-3 rounded-2xl transition-colors text-sm"
              >
                <Globe size={16} />
                Open Website
              </a>
            )}
          </div>

          {/* QR section */}
          <div className="bg-gray-50 px-8 py-8 flex flex-col items-center border-t border-gray-100">
            <QRCodeCard url={cardUrl} size={160} label="Scan to save contact" showDownload={true} />
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 text-center">
            <p className="text-[10px] text-gray-300 tracking-widest uppercase">Vora Travel · voratravel.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}
