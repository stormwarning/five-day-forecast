import { getForecast } from '../utils/get-forecast'

import styles from './city-forecast.module.css'

export async function CityForecast({ city }: { city?: string }) {
	const forecast = await getForecast(city)
	const today = forecast.list['0']?.[0]

	return (
		<div className={styles.forecast}>
			{/* <pre>{JSON.stringify(forecast, null, 2)}</pre> */}
			<div>
				<h3>{today?.dt_formatted}</h3>
				<p>{today?.main.temp}°C</p>
				<p>{today?.main.temp_min}°C</p>
				<p>{today?.main.temp_max}°C</p>
				<p>{today?.weather[0].description}</p>
			</div>
			{/* {forecast.list.map((data) => (
				<div key={data.dt}>
					<h3>{formatTimestamp(data.dt, forecast.city.timezone)}</h3>
					<p>{data.dt}</p>
					<p>{data.dt_txt}</p>
					<p>{forecast.city.timezone}</p>
					<p>{data.main.temp}°C</p>
					<p>{data.main.temp_min}°C</p>
					<p>{data.main.temp_max}°C</p>
					<p>{data.weather[0].description}</p>
				</div>
			))} */}
		</div>
	)
}
