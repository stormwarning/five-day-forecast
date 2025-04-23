import { getForecast } from '~app/utils/get-forecast'
import { Forecast } from '~/types/ForecastResponse'

import { TemperatureToday } from './temperature-today'

import styles from './default-city.module.css'

export async function DefaultCity() {
	const brasilia = await getForecast('brasilia')
	const johannesburg = await getForecast('johannesburg')
	const tokyo = await getForecast('tokyo')

	if (!brasilia || !johannesburg || !tokyo) return null

	const today = [
		{ ...(brasilia.list[0]?.[0] as Forecast), city: brasilia.city },
		{ ...(johannesburg.list[0]?.[0] as Forecast), city: johannesburg.city },
		{ ...(tokyo.list[0]?.[0] as Forecast), city: tokyo.city },
	]

	return (
		<div className={styles.three}>
			{today.map((city) => (
				<TemperatureToday key={city.city.id} city={city} small />
			))}
		</div>
	)
}
