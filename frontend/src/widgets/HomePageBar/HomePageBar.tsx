import { Btn, routes } from 'shared'
import styles from './HomePageBar.module.scss'

import white_figure from '../../assets/icons/white_figure.svg'
import dogs from '../../assets/icons/dogs.svg'

const HomePageBar = () => {
	return (
		<div className={styles.wrapper}>
			<div style={{display: 'flex'}}>
				<p className={styles.title}><span className={styles.donor}>DonorSearch</span> - твой путеводитель в мир <br /> донорства</p>
				<div className={styles.icons}>
					<img src={white_figure} className={`${styles.icon} ${styles.figure}`} />
					<img src={dogs} className={styles.icon} />
				</div>
			</div>
			{localStorage.getItem('token') ? null: <Btn to={routes.loginPage} type="outlined" width='207px' className={styles.btn}>Присоединиться</Btn>}
		</div>
	)
}

export default HomePageBar