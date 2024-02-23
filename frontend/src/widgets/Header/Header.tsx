import { memo } from "react";
import styles from './Header.module.scss'
import logo from 'assets/icons/logo.svg'
import { Link } from "react-router-dom";
import { Btn, routes } from "shared";
import {Text} from 'shared'
interface IProps {
	type: 'registration' | 'other'
}

const Header = memo((props: IProps) => {
	const { type = 'other'} = props
	return (
		<div className={styles.header}>
			<div className={styles.header__links}>
				<Link
				to={routes.homePage}
				><img src={logo}/></Link>
				<Link
				to={routes.becomeDonor}
				target="_blank"
				className={styles.header__link}
				>
					<Text type="light" fontSize={18}>Какие животные могут стать донорами?</Text>
				</Link>
				<Link
				to={routes.homePage}
				className={styles.header__where}>
					<Text type="light" fontSize={18}>Где сдать кровь?</Text>
				</Link>
			</div>
			{type === 'registration' ? null 
			:<div className={styles.header__btns}>
			<Btn type="tonal" to={routes.loginPage}>Войти</Btn>
			<Btn type="outlined" to={routes.registrationPage}>Зарегистрироваться</Btn>
			</div>}
		</div>
	)
})

export default Header