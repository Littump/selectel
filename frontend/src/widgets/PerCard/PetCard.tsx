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
			{/* <Text type={'medium'} fontSize={30} className={styles.card__title}>{props.type}</Text>
			<Text type={'medium'} fontSize={30} className={styles.card__title}>{props.need_blood_types?.split(';')}</Text>
			<Text type={'medium'} fontSize={20}>Владелец: {`${props.author.first_name} ${props.contact}`}</Text>
			<Text type={'medium'} fontSize={20}>Дата: ${props.date}</Text>
			<Text type={'medium'} fontSize={20}>Порода: {props.pet.breed}</Text>
			<Text type={'medium'} fontSize={20}>Нооходимое количество крови: `${props.blooud_amout} мг`</Text>
			<Text type={'medium'} fontSize={20}>Адрес: {props.address}, {props.city} </Text>
			<img src={props.pet.avatar} /> */}
			<Text type={'medium'} fontSize={30} className={styles.card__title}>{props.type}</Text>
			<Text type={'medium'} fontSize={30} className={styles.card__title}>{props.type}</Text>
			<Text type={'medium'} fontSize={20}>Владелец: {`${props.author.first_name} ${props.contact}`}</Text>
			<Text type={'medium'} fontSize={20}>{props.need_blood_types?.split(';')}</Text>
			<Text type={'medium'} fontSize={20}>Порода: {props.pet.breed}</Text>
			<Text type={'medium'} fontSize={20}>Нооходимое количество крови: `${props.blooud_amout} мг`</Text>
			<Text type={'medium'} fontSize={20}>Адрес: {props.address}, {props.city} </Text>
			<img src={props.pet.avatar} />

		</div>
	)
}

export default PetCard