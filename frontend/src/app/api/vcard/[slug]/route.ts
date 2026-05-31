import { NextResponse } from 'next/server'
import { getContact } from '@/lib/vcards/contacts'
import { buildVCard } from '@/lib/vcards/buildVCard'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const contact = getContact(params.slug)

  if (!contact) {
    return NextResponse.json(
      { error: 'Contact not found', slug: params.slug },
      { status: 404 },
    )
  }

  const vcf = buildVCard(contact)

  return new Response(vcf, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${params.slug}.vcf"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
