import { City, Forecast } from '~/types/ForecastResponse'
import { formatTemperature } from '../utils/format-temperature'

import styles from './temperature-today.module.css'
import Image from 'next/image'

interface CityForecast extends Forecast {
	city: City
}
interface Props {
	city: CityForecast
	small?: boolean
}

export function TemperatureToday({ city, small }: Props) {
	return (
		<div className={`${[styles.today, small && styles.small].join(' ')}`} key={city?.city.id}>
			{small ? (
				<p>{city?.city.name}</p>
			) : (
				<p>
					In <var>{city?.city.name}</var>, it is currently
				</p>
			)}
			<div className={styles.icon}>
				<Image
					src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
					alt={city?.weather[0].description}
					width={100}
					height={100}
				/>
			</div>
			<var className={styles.temperature}>
				{formatTemperature(city?.main?.temp)}
				<span>º</span>
			</var>
		</div>
	)
}
