import { memo } from "react";
import styles from "./FindDonor.module.scss";
import pet from "../../assets/images/pet.png";
import { Title } from "shared";
import InputPrimary from "shared/ui/InputPrimary/InputPrimary";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

const FindDonor = memo(() => {
    return (
        <Formik
            initialValues={{
                reason: "",
            }}
            onSubmit={(values) => {
                // здесь разные запросы в зависимости от type
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ touched, errors }) => (
                <Form className={styles.inputs}>
                    <div className={styles.wrapper}>
                        <Title>Анкета для поиска донора</Title>
                        <Link to="/profile">назад</Link>
                        <div className={styles.block}>
                            <div className={styles.donorBlock}>
                                <img src={pet} alt="" className={styles.img} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "start",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                Причина поиска донора:{" "}
                                <InputPrimary
                                    name="reason"
                                    touched={touched}
                                    errors={errors}
                                    placeholder="опишите причину"
                                    type="textarea"
                                />
                                <button type="submit" className={styles.submit}>
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
});

export default FindDonor;
