import { memo } from "react";
import styles from "./EditUserInputs.module.scss";
import * as Yup from "yup";
import InputPrimary from "shared/ui/InputPrimary/InputPrimary";
import { Formik } from "formik";
import { Form } from "formik";
import parse from "date-fns/parse";
import { useUpdateMeMutation } from "service/Service";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите имя"),
    lastName: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите фамилию"),
    address: Yup.string()
        .min(10, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите адрес"),
    birthday: Yup.date()
        .transform(function (value, originalValue) {
            if (this.isType(value)) {
                return value;
            }
            const result = parse(originalValue, "dd.MM.yyyy", new Date());
            return result;
        })
        .typeError("Введите валидную дату")
        .required("Введите дату рожденья")
        .min("1969-11-13", "Некорректная дата"),

    phone: Yup.string()
        .matches(phoneRegExp, "Номер введён некорректно")
        .required("Введите номер телефона"),
});

interface User {
    url?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    birthday?: string;
    phone?: string;
    password?: string;
    username?: string;
}
interface Input {
    title?: string;
    value?: string;
    name: string;
    placeholder?: string;
    type?: "text" | "date";
}

interface Props {
    userInfo?: User;
}

const EditUserInputs = memo((props: Props) => {
    const { userInfo } = props;
    console.log(userInfo);

    const inputs: Input[] = [
        {
            title: "Логин",
            name: "username",
            placeholder: "ivan123",
        },
        {
            title: "Имя",
            name: "firstName",
            placeholder: "Иван",
        },
        {
            title: "Фамилия",
            name: "lastName",
            placeholder: "Иванов",
        },
        {
            title: "Дата рождения",
            name: "birthday",
            placeholder: "01.01.2001",
        },
        {
            title: "Адрес регистрации",
            placeholder: "улица пушкина дом 2",
            name: "address",
        },
        {
            title: "Телефон",
            name: "phone",
            placeholder: "89602580605",
        },
    ];

    const [updateMe, result] = useUpdateMeMutation();
    return (
        <Formik
            initialValues={{
                firstName:
                    userInfo?.firstName == null ? "" : userInfo?.firstName,
                username: userInfo?.username == null ? "" : userInfo?.username,
                lastName: userInfo?.lastName == null ? "" : userInfo?.lastName,
                birthday:
                    userInfo?.birthday == null
                        ? "01.01.2000"
                        : userInfo?.birthday,
                address: userInfo?.address == null ? "" : userInfo?.address,
                password: userInfo?.password == null ? "" : userInfo?.password,
                phone: userInfo?.phone == null ? "" : userInfo?.phone,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                updateMe({ ...values });
            }}
        >
            {({ touched, errors }) => (
                <Form className={styles.inputs}>
                    <div className={styles.inputsGrid}>
                        <div className={styles.inputsGridCol}>
                            {inputs.map((input) => (
                                <div
                                    className={styles.editInfoInput}
                                    key={input.title}
                                >
                                    <span>{input.title}</span>
                                    <InputPrimary
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        errors={errors}
                                        type="text"
                                        touched={touched}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.inputsGridCol}>
                            <div className={styles.editInfoInput}>
                                <span>Сменить пароль</span>
                                <InputPrimary
                                    name="password"
                                    placeholder="*******"
                                    errors={errors}
                                    type="password"
                                    touched={touched}
                                />
                            </div>
                            <button
                                onClick={() => {}}
                                className={styles.submit}
                            >
                                Сменить пароль
                            </button>
                        </div>
                    </div>
                    <button type="submit" className={styles.submit}>
                        Сохранить
                    </button>
                </Form>
            )}
        </Formik>
    );
});

export default EditUserInputs;
