import { memo } from "react"
import {LeftColumnReg, MainPartLogin } from "widgets"

const LoginPage = memo(() => {
	return (
		<div style={{display: 'flex'}}>
			<LeftColumnReg/>
			<MainPartLogin/>
		</div>
	)
})

export default LoginPage