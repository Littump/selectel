import { memo } from "react"
import {LeftColumnReg, MainPartLogin } from "widgets"
import styles from './LoginPage.module.scss'

const LoginPage = memo(() => {
	return (
		<div className={styles.page}>
			<LeftColumnReg/>
			<MainPartLogin/>
		</div>
	)
})

export default LoginPage