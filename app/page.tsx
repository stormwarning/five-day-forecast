import { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'

import { CityForecast } from '~app/components/city-forecast'
import { getForecast } from '~app/utils/get-forecast'

import styles from './page.module.css'

interface Props {
	params?: Promise<{ slug: string }>
	searchParams: Promise<{ city: string | undefined }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { city } = await searchParams
	const forecast = await getForecast(city)

	return {
		title: forecast.city.name,
	}
}

export default async function Home({ searchParams }: Props) {
	const { city } = await searchParams

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>

				<Suspense fallback={<div>Loading...</div>}>
					<CityForecast city={city} />
				</Suspense>
			</main>
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	)
}
