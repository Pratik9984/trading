import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Trade Guru — International Trainings Academy',
  description:
    'Professional trading education backed by real-time market intelligence. Learn, Trade, Grow. Discipline Today — Freedom Tomorrow.',
  keywords: ['trading', 'forex', 'gold', 'market analysis', 'trading education', 'trade guru'],
}

import WhatsAppButton from './components/WhatsAppButton'
import CourseModal from './components/CourseModal'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <WhatsAppButton />
        <CourseModal />
      </body>
    </html>
  )
}