import { ReactNode } from "react"
import styles from './Title.module.scss'

interface IProps {
	children: ReactNode
	className?: string
}
const Title = (props: IProps) => {
	const {
		children,
		className
	} = props
	return (
		<p className={`${styles.title} ${className}`}>{children}</p>
	)
}
export default Title