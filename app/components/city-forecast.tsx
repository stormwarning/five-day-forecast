import { getForecast } from '~app/utils/get-forecast'

import { FutureForecast } from './future-forecast'

import styles from './city-forecast.module.css'
import { formatTemperature } from '../utils/format-temperature'

export async function CityForecast({ city }: { city?: string }) {
	const forecast = await getForecast(city)
	if (!forecast) return

	const today = forecast.list['0']?.[0]

	const future = Object.keys(forecast.list)
		.slice(1, 5)
		.map((key) => forecast.list[key])

	return (
		<>
			<main className={styles.today}>
				<p>
					In <var>{forecast.city.name}</var>, it is currently
				</p>
				<var className={styles.temperature}>
					{formatTemperature(today?.main.temp)}
					<span>º</span>
				</var>
			</main>
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
							<FutureForecast forecast={day} key={index} />
						))}
					</tbody>
				</table>
			</aside>
		</>
	)
}
