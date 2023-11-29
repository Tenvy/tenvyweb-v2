import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar/backofficeSidebar'
import '../globals.css'
import Provider from '@/provider/NextAuthProvider'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tenvy - Personal Website',
	description: 'Greetings and welcome to the digital abode of Tenvy, a seasoned Full Stack Developer embarking on a continuous journey at the crossroads of front-end finesse and back-end brilliance. This platform serves as a testament to the harmonious fusion of code, creativity, and an unwavering commitment to technological excellence.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const session = getServerSession()
	
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider session={session}>
				<div className="flex flex-col lg:flex-row ">
					<Sidebar />
					<div className='p-4 w-full'>
						{children}
					</div>
				</div>
				</Provider>
			</body>
		</html>
	)
}
