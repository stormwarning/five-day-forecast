import { redirect } from 'next/navigation'

import { UiButton } from './ui-button'
import { UiSelect } from './ui-select'

import styles from './select-city.module.css'

interface Props {
	currentCity: string
}

const CITIES = ['Vancouver', 'Edmonton', 'Reykjavik', 'Wellington']

export function SelectCity({ currentCity = '' }: Props) {
	async function handleSubmit(formData: FormData) {
		'use server'
		const city = formData.get('city') ?? ''

		redirect(`/${city}`)
	}

	return (
		<form className={styles.form} action={handleSubmit}>
			<UiSelect id="city" defaultValue={currentCity} name="city" aria-label="Select city">
				<option disabled value="">
					City…
				</option>
				{CITIES.map((city) => (
					<option key={city} value={city.toLowerCase()}>
						{city}
					</option>
				))}
			</UiSelect>
			<UiButton type="submit">Get forecast</UiButton>
		</form>
	)
}
