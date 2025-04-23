import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const viewport: Viewport = {
	themeColor: [{ color: '#f1f2f2' }, { media: '(prefers-color-scheme: dark)', color: '#16191b' }],
}

export const metadata: Metadata = {
	title: {
		default: '5 Day Forecast',
		template: '%s — 5 Day Forecast',
	},
	description: 'Get the 5-day forecast for your favourite city.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
		</html>
	)
}
