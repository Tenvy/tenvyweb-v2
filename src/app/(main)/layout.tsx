import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar/sidebar'
import '../globals.css'
import NextAuthProvider from '@/provider/NextAuthProvider'
import { getServerSession } from 'next-auth'
import { Suspense } from 'react'
import { NavigationEvents } from '@/components/elements/ProgressBar'
import Container from '@/components/elements/Container'

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

  const session = getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <div className="max-w-6xl mx-auto lg:px-8 dark:text-darkText">
            <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8">
              <Sidebar />
              <Container>
                {children}
              </Container>
              <Suspense>
                <NavigationEvents/>
              </Suspense>
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
