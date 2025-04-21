import { redirect } from 'next/navigation'

export function SelectCity() {
	async function handleSubmit(formData: FormData) {
		'use server'
		const city = formData.get('city') ?? ''

		redirect(`/?city=${city}`)
	}

	return (
		<form action={handleSubmit}>
			<select name="city">
				<option value="vancouver">Vancouver</option>
				<option value="edmonton">Edmonton</option>
				<option value="reykjavik">Reykjavik</option>
				<option value="wellington">Wellington</option>
			</select>
			<button type="submit">Get forecast</button>
		</form>
	)
}
