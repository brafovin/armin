import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saber 2.0 Clipper Set',
  description: 'Professionelles Haarschneider-Set — Clipper & Trimmer für präzise Ergebnisse.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
