import styles from './MainPartLogin.module.scss'
import {Title, Text, routes} from 'shared'
import vk from '../../assets/icons/vk.svg'
import odnokl from '../../assets/icons/odnokl.svg'
import yandex from '../../assets/icons/yandex.svg'
import { FormProvider, useForm } from 'react-hook-form'
import { memo } from 'react'
import {TextInput} from 'shared'
import { useAppDispatch } from 'app/store'
import { fetchLogin } from 'widgets/model/RegistrationSlice'
import { useNavigate } from 'react-router-dom'

const MainPartLogin = memo(() => {
	const methods = useForm({ mode: 'all' })
	const {handleSubmit} = methods
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const onSubmit = (data: any) => {
		dispatch(fetchLogin({password: data.password, username: data.login})).then(response => {
			if (typeof response.payload === 'string') {
				navigate(routes.homePage)
			}
		})
	}
	return (
		<div className={styles.wrapper}>
			<Title className={styles.title}>Вход в аккаунт</Title>
			<div className={styles.icons_wrapper}>
				<img src={vk} alt="" />
				<img src={yandex} alt="" />
				<img src={odnokl} alt="" />
			</div>
			<Text type={'light'} fontSize={20}>или введите логин и пароль</Text>
			<FormProvider {...methods}>
				<form id='login_form' className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
				<TextInput name='login' width='400px' label='Логин'/>
				<TextInput name='password' width='400px' label='Пароль' type='password'/>
				</form>
			</FormProvider>
			<button
			form='login_form'
			className={styles.btn}
			type='submit'
			>Войти</button>
		</div>
	)
})
export default MainPartLogin