import { Field } from "formik";
import styles from "./InputPrimary.module.scss";

interface Props {
    className?: string;
    errors?: any;
    touched?: any;
    type?: string;
    name: string;
    placeholder?: any;
}

const InputPrimary = (props: Props) => {
    const { className, errors, touched, name, type, placeholder } = props;
    const error = errors[name] && touched[name];
    const success = touched[name] && !errors[name];
    return (
        <div className={styles.wrapper}>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                className={`${className} ${styles.input} ${
                    success ? styles.success : error ? styles.error : ""
                }`}
            />

            {error ? (
                <span className={styles.errorText}>{errors[name]}</span>
            ) : (
                ""
            )}
        </div>
    );
};

export default InputPrimary;
