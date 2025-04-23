import { FutureForecast } from '~app/components/future-forecast'
import { TemperatureToday } from '~app/components/temperature-today'
import { getForecast } from '~app/utils/get-forecast'
import { Forecast } from '~/types/ForecastResponse'

import styles from './city-forecast.module.css'

export async function CityForecast({ city }: { city?: string }) {
	const forecast = await getForecast(city)

	if (!forecast) return

	const today = { ...(forecast.list[0]?.[0] as Forecast), city: forecast.city }
	const future = forecast.list.slice(0, 5)

	return (
		<>
			<TemperatureToday city={today} />
			<aside className={styles.forecast}>
				<h2>5-Day Forecast</h2>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Low</th>
							<th>High</th>
						</tr>
					</thead>
					<tbody>
						{future.map((day, index) => (
							<FutureForecast
								key={`${forecast.city.id}-${index}`}
								forecast={day}
								timezoneOffset={forecast.city.timezone}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</aside>
		</>
	)
}
