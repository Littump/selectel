import { Title, Text, TextInput, routes } from "shared";
import styles from "./RegistrationWidget.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "app/store";
import vk from "../../assets/icons/vk.svg";
import odnokl from "../../assets/icons/odnokl.svg";
import yandex from "../../assets/icons/yandex.svg";
import { fetchRegister } from "widgets/model/RegistrationSlice";
import { useNavigate } from "react-router-dom";
import { useSigninMutation, useSignupMutation } from "service/Service";
import { useEffect } from "react";
const RegistrationWidget = () => {
    const methods = useForm({ mode: "all" });
    const { handleSubmit, setError } = methods;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signup, result] = useSignupMutation();
    const onSubmit = (data: any) => {
        // if (data.password1 !== data.password2) {
        // 	setError('password2', {type: 'custom', message: 'Пароли не совпадают'})
        // } else{
        // 	dispatch(fetchRegister({password: data.password1, username: data.login})).then(response => {
        // 		if (typeof response.payload === 'string') {
        // 			navigate(routes.homePage)
        // 		}
        // 	})
        // }
        signup({
            username: data.login,
            email: "somemail@mail.ru",
            password: data.password1,
        });
    };
    useEffect(()=>{
        if(result.isSuccess) navigate('/login')
    },[result, navigate])
    return (
        <div className={styles.wrapper}>
            <Title className={styles.title}>Регистрация</Title>
            <div className={styles.icons_wrapper}>
                <img src={vk} alt="" />
                <img src={yandex} alt="" />
                <img src={odnokl} alt="" />
            </div>
            <Text type={"light"} fontSize={20}>
                или используйте другие данные{" "}
            </Text>
            <FormProvider {...methods}>
                <form
                    id="registration"
                    className={styles.inputs}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextInput name="login" width="400px" label="Логин" />
                    <TextInput
                        name="password1"
                        width="400px"
                        label="Пароль"
                        type="password"
                    />
                    <TextInput
                        name="password2"
                        width="400px"
                        label="Пароль"
                        type="password"
                    />
                </form>
            </FormProvider>
            <button form="registration" className={styles.btn} type="submit">
                Зарегистрироваться
            </button>
        </div>
    );
};

export default RegistrationWidget;
