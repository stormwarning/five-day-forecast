export function getOffsetDate(unixTimestamp: number, timezoneOffset: number) {
	return new Date((unixTimestamp + timezoneOffset) * 1000)
}
