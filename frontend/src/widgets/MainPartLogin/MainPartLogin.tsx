import styles from "./MainPartLogin.module.scss";
import { Title, Text } from "shared";
import vk from "../../assets/icons/vk.svg";
import odnokl from "../../assets/icons/odnokl.svg";
import yandex from "../../assets/icons/yandex.svg";
import { FormProvider, useForm } from "react-hook-form";
import { memo, useEffect } from "react";
import { TextInput } from "shared";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "service/Service";

const MainPartLogin = memo(() => {
    const methods = useForm({ mode: "all" });
    const { handleSubmit } = methods;
    const navigate = useNavigate();
    const [signin, result] = useSigninMutation();
    const onSubmit = (data: any) => {
        signin({ password: data.password, username: data.login });
    };
    useEffect(() => {
        if (result.isSuccess) {
            localStorage.setItem("token", result?.data?.auth_token);
            navigate("/profile");
        }
    }, [result, navigate]);
    return (
        <div className={styles.wrapper}>
            <Title className={styles.title}>Вход в аккаунт</Title>
            <div className={styles.icons_wrapper}>
                <img src={vk} alt="" />
                <img src={yandex} alt="" />
                <img src={odnokl} alt="" />
            </div>
            <Text type={"light"} fontSize={20}>
                или введите логин и пароль
            </Text>
            <FormProvider {...methods}>
                <form
                    id="login_form"
                    className={styles.inputs}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextInput name="login" width="400px" label="Логин" />
                    <TextInput
                        name="password"
                        width="400px"
                        label="Пароль"
                        type="password"
                    />
                </form>
            </FormProvider>
            <button form="login_form" className={styles.btn} type="submit">
                Войти
            </button>
        </div>
    );
});
export default MainPartLogin;
