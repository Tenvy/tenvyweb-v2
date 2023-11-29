import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar/sidebar'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tenvy - Personal Website',
  description: 'Greetings and welcome to the digital abode of Tenvy, a seasoned Full Stack Developer embarking on a continuous journey at the crossroads of front-end finesse and back-end brilliance. This platform serves as a testament to the harmonious fusion of code, creativity, and an unwavering commitment to technological excellence.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
              {children}
      </body>
    </html>
  )
}
