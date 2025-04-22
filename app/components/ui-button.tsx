import { ComponentProps } from 'react'

import styles from './ui-button.module.css'

export function UiButton(props: ComponentProps<'button'>) {
	return <button {...props} className={styles.button} />
}
