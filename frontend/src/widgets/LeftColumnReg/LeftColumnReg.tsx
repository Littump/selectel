import { Title, Text, Btn } from 'shared'
import styles from './LeftColumnReg.module.scss'

const LeftColumnReg = () => {
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title}>Добро пожаловать!</Title>
			<Text  type={'light'} fontSize={20} className={styles.text}> 
			Донорами могут стать не только люди, но и кошки с собаками. Как и у людей, у животных порой необходимо донорство. 
			<br/> <br />
			Эта процедура спасает многих кошек и собак, продлевает их жизнь на радость хозяев. 
			</Text>
			<Btn type="tonal" width='239px'>Регистрация</Btn>
		</div>
	)
}
export default LeftColumnReg