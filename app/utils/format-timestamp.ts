import { getOffsetDate } from './get-offset-date'

export function formatTimestamp(unixTimestamp: number, timezoneOffset: number): string {
	const date = getOffsetDate(unixTimestamp, timezoneOffset)

	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
		timeZone: 'UTC', // Use UTC since we already adjusted the timestamp
	}).format(date)
}
