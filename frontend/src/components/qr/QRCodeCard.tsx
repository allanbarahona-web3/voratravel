'use client'

import { useRef, useCallback } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Download } from 'lucide-react'

interface QRCodeCardProps {
  url: string
  size?: number
  label?: string
  showDownload?: boolean
}

export default function QRCodeCard({
  url,
  size = 180,
  label = 'Scan to save contact',
  showDownload = true,
}: QRCodeCardProps) {
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'voratravel-qr.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [])

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="bg-white rounded-2xl p-4 shadow-md border border-gray-100"
        ref={canvasRef}
      >
        <QRCodeCanvas
          value={url}
          size={size}
          bgColor="#ffffff"
          fgColor="#1B2D4F"
          level="M"
          marginSize={1}
        />
      </div>

      <p className="text-xs text-gray-400 tracking-wide">{label}</p>

      {showDownload && (
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 text-xs text-brand-navy/60 hover:text-brand-navy transition-colors font-medium"
        >
          <Download size={13} />
          Download QR
        </button>
      )}
    </div>
  )
}
