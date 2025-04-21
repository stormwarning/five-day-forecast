import { getOffsetDate } from './get-offset-date'

export function formatTimestamp(unixTimestamp: number, timezoneOffset: number): string {
	const date = getOffsetDate(unixTimestamp, timezoneOffset)

	return new Intl.DateTimeFormat('en-CA', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	}).format(date)
}
