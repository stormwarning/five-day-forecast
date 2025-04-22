import { notFound } from 'next/navigation'

import { differenceInCalendarDays } from 'date-fns'

import { ForecastResponse } from '~/types/ForecastResponse'
import { formatTimestamp } from '~app/utils/format-timestamp'

import { getOffsetDate } from './get-offset-date'

const API_KEY = 'fcde858e23a19e3c13f197324fe6af53'

export async function getForecast(city?: string) {
	if (!city) return

	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&units=metric`,
		{
			cache: 'force-cache',
		},
	)
	const data = (await response.json()) as ForecastResponse

	if (!data || data.cod !== '200') notFound()

	const newForecasts = data.list.map((forecast) => ({
		...forecast,
		dt_formatted: formatTimestamp(forecast.dt, data.city.timezone),
	}))

	const today = new Date()
	const groupedForecasts = Object.groupBy(newForecasts, (forecast) => {
		const forecastDate = getOffsetDate(forecast.dt, data.city.timezone)
		return String(differenceInCalendarDays(forecastDate, today))
	})
	/**
	 * Group into an array of arrays instead of keys for cases where the
	 * current day for the location is a day ahead of the user's local time.
	 */
	const forecastArrays = Object.keys(groupedForecasts).map((key) => groupedForecasts[key])

	return {
		...data,
		list: forecastArrays,
	}
}
