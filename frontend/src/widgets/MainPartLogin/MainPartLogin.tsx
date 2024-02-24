import styles from './MainPartLogin.module.scss'
import {Title, Text} from 'shared'
import vk from '../../assets/icons/vk.svg'
import odnokl from '../../assets/icons/odnokl.svg'
import yandex from '../../assets/icons/yandex.svg'

const MainPartLogin = () => {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title}>Вход в аккаунт</Title>
			<div className={styles.icons_wrapper}>
				<img src={vk} alt="" />
				<img src={yandex} alt="" />
				<img src={odnokl} alt="" />
			</div>
			<Text type={'light'} fontSize={20}>или введите логин и пароль</Text>
			<div className={styles.inputs}></div>
		</div>
	)
}
export default MainPartLogin