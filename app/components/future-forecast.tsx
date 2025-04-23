import { ForecastWithFormattedDate } from '~/types/ForecastResponse'
import { formatTemperature } from '../utils/format-temperature'
import { getOffsetDate } from '../utils/get-offset-date'

interface Props {
	index: number
	timezoneOffset: number
	forecast?: ForecastWithFormattedDate[]
}

export function FutureForecast({ forecast, index, timezoneOffset }: Props) {
	if (!forecast) return null

	const sortedForecast = forecast.sort((a, b) => a.main.temp - b.main.temp)
	const date = getOffsetDate(sortedForecast[0].dt, timezoneOffset)
	const day = new Intl.DateTimeFormat('en-CA', { weekday: 'short' }).format(new Date(date))

	return (
		<tr>
			<th>{index === 0 ? 'Today' : day}</th>
			<td>{formatTemperature(sortedForecast[0].main.temp)}º</td>
			<td>{formatTemperature(sortedForecast[sortedForecast.length - 1].main.temp)}º</td>
		</tr>
	)
}
