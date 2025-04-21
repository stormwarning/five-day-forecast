import { Metadata } from 'next'
import { Suspense } from 'react'

import { CityForecast } from '~app/components/city-forecast'
import { SelectCity } from '~app/components/select-city'
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
		title: forecast?.city.name,
	}
}

export default async function Home({ searchParams }: Props) {
	const { city } = await searchParams

	return (
		<article className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerContent}>Five Day Forecast</div>
				<SelectCity />
			</header>
			<div className={styles.content}>
				{city ? (
					<Suspense fallback={<div>Loading...</div>}>
						<CityForecast city={city} />
					</Suspense>
				) : (
					<p>No city selected.</p>
				)}
			</div>
		</article>
	)
}
