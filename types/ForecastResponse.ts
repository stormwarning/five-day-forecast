interface ForecastData {
	/** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit */
	temp: number
	/** This temperature parameter accounts for the human perception of weather */
	feels_like: number
	/** Minimum temperature at the moment of calculation */
	temp_min: number
	/** Maximum temperature at the moment of calculation */
	temp_max: number
	/** Atmospheric pressure on the sea level by default, hPa */
	pressure: number
	/** Atmospheric pressure on the sea level, hPa */
	sea_level: number
	/** Atmospheric pressure on the ground level, hPa */
	grnd_level: number
	/** Humidity, % */
	humidity: number
	/** Internal parameter */
	temp_kf: number
}

interface Weather {
	/** Weather condition id */
	id: number
	/** Group of weather parameters (Rain, Snow, Clouds etc.) */
	main: string
	/** Weather condition within the group */
	description: string
	/** Weather icon id */
	icon: string
}

interface Wind {
	/** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
	speed: number
	/** Wind direction, degrees (meteorological) */
	deg: number
	/** Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
	gust: number
}

interface Clouds {
	/** Cloudiness, % */
	all: number
}

interface City {
	/** City ID */
	id: number
	/** City name */
	name: string
	coord: {
		/** Geo location, latitude */
		lat: number
		/** Geo location, longitude */
		lon: number
	}
	/** Country code (GB, JP etc.) */
	country: string
	/** City population */
	population: number
	/** Shift in seconds from UTC */
	timezone: number
	/** Sunrise time, Unix, UTC */
	sunrise: number
	/** Sunset time, Unix, UTC */
	sunset: number
}

export interface Forecast {
	/** Time of data forecasted, unix, UTC */
	dt: number
	/** Time of data forecasted, ISO, UTC */
	dt_txt: string
	main: ForecastData
	weather: Weather[]
	clouds: Clouds
	wind: Wind
	/** Average visibility, metres. The maximum value of the visibility is 10km */
	visibility: number
	/** Probability of precipitation. The values of the parameter vary between 0 and 1 */
	pop: number
	rain?: {
		/** Rain volume for last 3 hours, mm */
		'3h': number
	}
	snow?: {
		/** Snow volume for last 3 hours, mm */
		'3h': number
	}
	sys: {
		/** Part of the day (n - night, d - day) */
		pod: 'n' | 'd'
	}
}

export interface ForecastResponse {
	/** Internal parameter */
	cod: string
	/** Internal parameter */
	message: string
	/** Number of timestamps returned in the API response */
	cnt: number
	list: Forecast[]
	city: City
}
