import { memo } from "react";
import styles from "./EditPetInputs.module.scss";
import * as Yup from "yup";
import InputPrimary from "shared/ui/InputPrimary/InputPrimary";
import { Formik } from "formik";
import { Form } from "formik";
import parse from "date-fns/parse";
import { useAddPetMutation } from "service/Service";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите кличку"),
    bloodType: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите группу крови"),
    male: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите пол"),
    weight: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите вес"),
    breed: Yup.string()
        .min(2, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите породу"),
    address: Yup.string()
        .min(3, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите адрес"),
    city: Yup.string()
        .min(3, "Слишком короткий!")
        .max(150, "Слишком длинный!")
        .required("Введите город"),
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
});

interface Pet {
    url?: string;
    name?: string;
    birthday?: string;
    address?: string;
    bloodType?: string;
    male?: string;
    breed?: string;
    weight?: string;
    ills?: string;
    vaccinations?: string;
}

interface Input {
    title?: string;
    value?: string;
    name: string;
    placeholder?: string;
    type?: "text" | "date";
}

interface Props {
    petInfo?: Pet;
    type?: "edit" | "add";
}

const EditPetInputs = memo((props: Props) => {
    const { petInfo, type } = props;

    const inputs: Input[] = [
        {
            title: "Кличка",
            name: "name",
            placeholder: "Шарик",
        },
        {
            title: "Порода",
            name: "breed",
            placeholder: "Сиба ину",
        },
        {
            title: "дата рожденья",
            name: "birthday",
            placeholder: "02.02.2004",
        },
        {
            title: "Адрес",
            name: "address",
            placeholder: "Улица пушкина 2",
        },
        {
            title: "Город",
            name: "city",
            placeholder: "Москва",
        },
        {
            title: "Группа крови",
            name: "bloodType",
            placeholder: "Dea 1.1",
        },
        {
            title: "Пол",
            name: "male",
            placeholder: "Мужской",
        },
        {
            title: "Вес",
            name: "weight",
            placeholder: "10",
        },
        {
            title: "Болезни",
            name: "ills",
            placeholder: "нет",
        },
        {
            title: "Прививки",
            name: "vaccinations",
            placeholder: "Все",
        },
    ];
    const initialValues =
        type == "edit"
            ? {
                  url: petInfo?.url,
                  name: petInfo?.name,
                  birthday: petInfo?.birthday,
                  address: petInfo?.address,
                  bloodType: petInfo?.bloodType,
                  male: petInfo?.male,
                  breed: petInfo?.breed,
                  weight: petInfo?.weight,
                  ills: petInfo?.ills,
                  vaccinations: petInfo?.vaccinations,
              }
            : {
                  url: "",
                  name: "",
                  birthday: "",
                  address: "",
                  bloodType: "",
                  male: "",
                  breed: "",
                  weight: "",
                  ills: "",
                  vaccinations: "",
              };
    const [addPet, result] = useAddPetMutation();
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                addPet(values);
            }}
        >
            {({ touched, errors }) => (
                <Form className={styles.inputs}>
                    <div className={styles.inputsGrid}>
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
                    <button type="submit" className={styles.submit}>
                        {type == "edit" ? "Сохранить" : "Добавить"}
                    </button>
                </Form>
            )}
        </Formik>
    );
});

export default EditPetInputs;
