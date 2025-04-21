export function formatTemperature(temperature?: string | number) {
	return new Intl.NumberFormat('en-CA', {
		maximumFractionDigits: 0,
		roundingMode: 'floor',
		unit: 'celsius',
	}).format(Number(temperature))
}
