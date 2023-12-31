import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ADVENT OF NEXT',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="fixed left-[50%] top-0 translate-x-[-50%] py-2 font-bold">
					<Link href={'/'}>{'Home'}</Link>
				</nav>
				{children}
			</body>
		</html>
	)
}
