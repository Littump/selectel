import { Btn, Title, routes } from 'shared'
import styles from './HomePageBar.module.scss'
import { useEffect } from 'react'
import white_figure from '../../assets/icons/white_figure.svg'
import dogs from '../../assets/icons/dogs.svg'
import { useAppDispatch } from 'app/store'
import { fetchAllAdvertisements } from 'widgets/model/RegistrationSlice'

const HomePageBar = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchAllAdvertisements())
	}, [])

	// const allAdvs = useSelector((state: RootState) => state.RegistrationSlice.allAdvs)
	// const cards = allAdvs.map((ad: any) => <PetCard key={ad.id} {...ad}/>)
	return (
		<>
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
		<div style={{marginTop: '44px'}}>
			<Title>Поиск донора</Title>
		</div>
		<div className={styles.filters}>
			<Btn width='268px' className={styles.filters__btn}>Вид животного</Btn>
			<Btn width='268px' className={styles.filters__btn}>Группа крови</Btn>
			<Btn width='268px' className={styles.filters__btn}>Населенный пункт</Btn>
		</div>
		<div className={styles.card_wrapper}>
			{/* <PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/>
			<PetCard/> */}
			{/* {cards} */}
		</div>
		</>
	)
}

export default HomePageBar