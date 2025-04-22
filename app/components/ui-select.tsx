import { ComponentProps, ReactNode } from 'react'

import { Select } from '@headlessui/react'

import styles from './ui-select.module.css'

interface Props extends Omit<ComponentProps<'select'>, 'defaultValue'> {
	children: ReactNode
	defaultValue: string
}

export function UiSelect({ children, defaultValue, ...props }: Props) {
	return (
		<div className={styles.container}>
			{/**
			 * Nextjs complains about `defaulValue` not being a scalar value
			 * for some reason, so we're using the first value in the array.
			 */}
			<Select defaultValue={defaultValue[0]} {...props} className={styles.select}>
				{children}
			</Select>
			<ChevronUpDownIcon />
		</div>
	)
}

function ChevronUpDownIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={styles.icon}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
			/>
		</svg>
	)
}
