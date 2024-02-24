import styles from './PetCard.module.scss'
import { Text } from 'shared'
interface IPetData{
	id?: number
	author?: any
	pet?: any,
	type?: string
	breed?: string
	need_blood_types?: string
	contact?: string
	blooud_amout?: number
	address?: string
	city?: string
	data?: string
}
const PetCard = (props: IPetData) => {

	return (
		<div className={styles.card}>
			<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
				<Text type={'medium'} fontSize={30} className={styles.card__title}>{props.type}</Text>
				<Text type={'medium'} fontSize={30} className={styles.card__title}>{props.need_blood_types?.split(';')}</Text>
			</div>
			<div style={{display: 'flex',flexDirection: 'column' ,justifyContent: 'space-between', gap: '10px'}}>
				<Text type={'medium'} fontSize={20}>Владелец: {`${props.author.first_name} ${props.contact}`}</Text>
				<Text type={'medium'} fontSize={20}>Порода: {props.pet.breed}</Text>
				<Text type={'medium'} fontSize={20}>Необходимое количество крови: <br />`${props.blooud_amout} мг`</Text>
				<Text type={'medium'} fontSize={20}>Адрес приемного пункта: <br />{props.address}, {props.city}</Text>
				<Text type={'medium'} fontSize={20}>Дата: ${props.data}</Text>
			</div>
			{/* <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
				<Text type={'medium'} fontSize={30} className={styles.card__title}>Кошка</Text>
				<Text type={'medium'} fontSize={30} className={styles.card__title}>А / A </Text>
			</div>
			<div style={{display: 'flex',flexDirection: 'column' ,justifyContent: 'space-between', gap: '10px'}}>
				<Text type={'medium'} fontSize={20}>Владелец: Иван +79895262807</Text>
				<Text type={'medium'} fontSize={20}>Порода: корги</Text>
				<Text type={'medium'} fontSize={20}>Необходимое количество крови: <br />10 мг</Text>
				<Text type={'medium'} fontSize={20}>Адрес приемного пункта: <br />Адрес, Город </Text>
			</div> */}
			{/* <img src={props.pet.avatar} /> */}

		</div>
	)
}

export default PetCard