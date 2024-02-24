import { ReactNode } from "react"
import styles from './Text.module.scss'

interface IProps {
	children: ReactNode
	className?: string
	type: 'medium' | 'light'
	fontSize: number
}
const Text = (props: IProps) => {
	const {
		children,
		className,
		type,
		fontSize,
	} = props
	return (
		<p className={`${styles.text} ${className} ${styles[type]}`} style={{fontSize: `${fontSize}px`, lineHeight: `${fontSize}px`}}>{children}</p>
	)
}
export default Text