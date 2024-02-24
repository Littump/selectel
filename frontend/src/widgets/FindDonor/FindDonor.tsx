import { memo } from "react";
import styles from "./FindDonor.module.scss";
import pet from "../../assets/images/pet.png";
import { Title } from "shared";
import InputPrimary from "shared/ui/InputPrimary/InputPrimary";
import { Form, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import { useAddAdMutation } from "service/Service";
import { useSelector } from "react-redux";

const FindDonor = memo(() => {
    const { petId } = useParams();
    const [addAd] = useAddAdMutation();
    const userInfo = useSelector((state:any) => state.user?.userInfo);
    const petInfo = useSelector((state:any) => state.user?.pets).filter(
        (el : any) => el.id === petId
    )[0];
    console.log(petInfo);
    return (
        <Formik
            initialValues={{
                reason: "",
            }}
            onSubmit={(values) => {
                addAd({
                    reason: values.reason,
                    address: userInfo.address,
                    city: userInfo?.city,
                    need_blood_types: petInfo.bloodType,
                });
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
