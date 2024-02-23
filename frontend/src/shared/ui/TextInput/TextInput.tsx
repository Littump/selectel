import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import {Text} from 'shared'

import styles from './TextInput.module.scss'
import { FormEvent } from 'react'

interface IInputProps {
	onHandleChange?: (event: FormEvent) => void
	className?: string
	width?: string | number
	label?: string
	name: string
	type?: 'password' | 'text'
}

const TextInput = (props: IInputProps) => {
	const {className, 
		onHandleChange,
		width,
		label,
		name,
		type = 'text'
	} = props
	const { register, formState} = useFormContext()
	const { errors } = formState

	return (
		<div className={styles.wrapper} style={{ width }}>
		<input
		  {...register(name, {
			required: {
				value: true,
				message: 'Обязательное поле',
			},
			pattern: {
			  value: /[A-Za-z0-9]/,
			  message: 'Неверный формат ввода',
			},
			onChange: (e) => {
			  if (onHandleChange) {
				onHandleChange(e)
			  }
			},
		  })}
		  placeholder={label}
		  key={name}
		  id={name}
		  className={`${styles.input} ${className}`}
		  autoComplete="off"
		  type={type}
		/>
		<ErrorMessage
		  errors={errors}
		  name={name}
		  render={({ message }) => (
			<Text className={styles.error} type={'light'} fontSize={14}>
			  {message}
			</Text>
		  )}
		/>
	  </div>
	)
}

export default TextInput