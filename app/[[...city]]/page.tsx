import { Metadata } from 'next'
import { Suspense } from 'react'

import { CityForecast } from '~app/components/city-forecast'
import { DefaultCity } from '~app/components/default-city'
import { SelectCity } from '~app/components/select-city'
import { getForecast } from '~app/utils/get-forecast'

import styles from './page.module.css'

interface Props {
	params: Promise<{ city: string }>
	searchParams: Promise<{ city: string | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { city } = await params
	const forecast = await getForecast(city)

	return {
		...(city && { title: forecast?.city.name }),
	}
}

export default async function Home({ params }: Props) {
	const { city } = await params

	return (
		<article className={styles.page}>
			<header className={styles.header}>
				<div className={styles.title}>5-Day Forecast</div>
				<SelectCity currentCity={city ?? ''} />
			</header>
			<div className={styles.content}>
				{city ? (
					<Suspense fallback={<div>Loading...</div>}>
						<CityForecast city={city} />
					</Suspense>
				) : (
					<Suspense fallback={<div>Loading...</div>}>
						<DefaultCity />
					</Suspense>
				)}
			</div>
		</article>
	)
}
